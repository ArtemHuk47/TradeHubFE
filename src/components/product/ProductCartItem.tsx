import React, {useEffect, useState} from "react";
import {CartItemDto, Product} from "../../models/models";
import {fetchProductById, fetchProductImages, fetchProducts} from "../../api/productApi";
import Search from "../search/Search";
import "./CartPage.css"
import api from "../../api/api";
interface ProductCartItemProps {
    cartItem: CartItemDto,
    setReqRef: (i: number) => void,
    x: number
}
function ProductCartItem({cartItem, setReqRef, x}: ProductCartItemProps) {
    const [image, setImage] = useState<string>("");
    const [product, setProduct] = useState<Product | undefined>(undefined)
    const [quantity, setQuantity] = useState<number>(cartItem.quantity)
    console.log(cartItem)
    useEffect(() => {
        const getUsers = async () => {
            try {
                const p = await fetchProductById(cartItem.productId)
                setProduct(p);
                const images = await fetchProductImages(p?.id ?? 0);
                if (images.length > 0) {
                    setImage(images[0]);
                    console.log(images[0])// Set the first image URL if available
                }
            } catch (error) {
                console.error('Failed to fetch users:', error);
                // Handle errors or set error state as needed
            }
        };

        getUsers();
    }, []);
    const updateQuantity = async (newQuantity: number) => {
        try {
            await api.put(`/Cart/UpdateQuantity/${cartItem.id}`, newQuantity);
            setQuantity(newQuantity);
        } catch (error) {
            console.error('Failed to update quantity:', error);
        }
    };

    const removeItem = async () => {
        try {
            setReqRef(x + 1)
            await api.delete(`/Cart/RemoveItem/${cartItem.userId}/${cartItem.id}`);
            window.location.reload();

        } catch (error) {
            console.error('Failed to remove cart item:', error);
        }
    };

    useEffect(() => {

    }, [quantity]);
    return (
        <div>
            <div className="cart-item">
                <div className="cart-item-image">
                    {image ? <img src={`http://localhost:5292/${image}`} alt={product?.name}/> :
                        <p></p>}
                </div>
                <div className="cart-item-description">
                    <p className="description-title">{product?.name}</p>
                    <p className="description-price">{product?.price} Грн</p>
                    <div className="description-quantity">


                        <button onClick={() => quantity > 1 ? updateQuantity(quantity - 1) : removeItem()}>-</button>
                        <div>{quantity}</div>
                        <button onClick={() => updateQuantity(quantity + 1)}>+</button>
                    </div>
                    <button className="remove-button" onClick={removeItem}>Remove</button>
                </div>


            </div>

        </div>

    )
        ;
}

export default ProductCartItem;