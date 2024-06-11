import Category from "../components/category/Category";
import ProductItems from "../components/product/ProductItems";
import Search from "../components/search/Search";
import CarouselBlock from "../components/carousel/Carousel";
import ProductDescription from "../components/product-description/ProductDescription";
import ProductName from "../components/product-name/ProductName";
import ProductLong from "../components/product-long/ProductLong";
import React, {useEffect, useState} from "react";
import {CartItemDto, Product} from "../models/models";
import {fetchProductById, fetchProductImages, fetchProducts} from "../api/productApi";
import ProductCartItem from "../components/product/ProductCartItem";
import {fetchCartItemsByUserId} from "../api/userApi";

function CartPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<CartItemDto[]>([]);
    const [reqRef, setReqRef] = useState<number>(0)
    useEffect(() => {
        const fetchCartAndProducts = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) {
                    console.error('No user ID found in local storage');
                    return;
                }
                const cartItems = await fetchCartItemsByUserId(parseInt(userId));
                setCartItems(cartItems)
            } catch (error) {
                console.error('Failed to fetch cart items or products:', error);
            }
        };

        fetchCartAndProducts();
    }, [reqRef]);


    return (
        <div className="product-page container">
            <Search/>
            <div className="product-search-list">
                {
                    cartItems.map(cartItem => <ProductCartItem  cartItem={cartItem} setReqRef={setReqRef} x={reqRef}/>)
                }
            </div>
        </div>
    );
}

export default CartPage;