import React, {useEffect, useState} from 'react';

import "./ProductName.css";
import {CartItemDto, Category, Product, UserDto} from "../../models/models";
import {fetchCategoryById} from "../../api/categoryApi";
import api from "../../api/api";
import {getUserById} from "../../api/userApi";
import {CHAT_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
interface ProductNameProps {
    product: Product | null
}
function ProductName({product}: ProductNameProps) {
    const navigate = useNavigate();
    const [category, setCategory] = useState<Category>();
    const [seller, setSeller] = useState<UserDto| undefined>(undefined)
    console.log("product: ", product)
    useEffect(() => {
        const getCategory = async () => {
            try {
                console.log("test1")
                if(product?.categoryId) {
                    const userData = await fetchCategoryById(product.categoryId);
                    setCategory(userData);
                    console.log("test")
                    const s = await getUserById(product.sellerId)
                    setSeller(s)
                }
            } catch (error) {
                console.error('Failed to fetch users:', error);
                // Handle errors or set error state as needed
            }
        };
        getCategory();
    }, [product]);

    useEffect(() => {

    }, []);
    const handleAddToCart = async () => {
        const userId = localStorage.getItem('userId');
        if (userId && product) {

            const cartItemDto: CartItemDto = {
                id: 1,
                userId: parseInt(userId),
                productId: product.id,
                quantity: 1  // Assuming you want to add one quantity; adjust as needed
            };

            try {
                const response = await api.post('Cart/AddItem', cartItemDto);
                console.log('Item added to cart successfully:', response.data);
            } catch (error) {
                console.error('Failed to add item to cart:', error);
            }
        }

        window.alert("Товар добавлено в кошик")
    };

    return (
        <div className="product-name">

            <div className="product-seller">
                <div className="seller-title">
                    <p>Продавець</p>
                </div>

                <div className="seller">
                    <div className="seller-image">
                        <p></p>
                    </div>

                    <div className="seller-name">
                        <p>{seller?.firstName ?? '' + " " + seller?.lastName ?? ''}</p>
                    </div>
                </div>
            </div>

            <div className="product-info">
                <div className="info-category">
                    <p>{category?.name ?? ""}</p>
                </div>
                <div className="info-name">
                    <p>{product?.name ?? ""}</p>
                </div>
                <div className="info-price">
                    <p>{product?.price ?? 0} Грн</p>
                </div>

                <div className="info-button-cart" onClick={handleAddToCart}>
                    <p>Добавити в корзину</p>
                </div>
                <div className="info-button-message" onClick={() => navigate(CHAT_ROUTE)}>
                    <p>Повідомлення</p>
                </div>
            </div>
        </div>
    );
}

export default ProductName;
