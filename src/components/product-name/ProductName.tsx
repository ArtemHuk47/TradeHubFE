import React, {useEffect, useState} from 'react';

import "./ProductName.css";
import {CartItemDto, Category, Product} from "../../models/models";
import {fetchCategoryById} from "../../api/categoryApi";
import api from "../../api/api";
interface ProductNameProps {
    product: Product | null
}
function ProductName({product}: ProductNameProps) {
    const [category, setCategory] = useState<Category>();

    useEffect(() => {
        const getCategory = async () => {
            try {
                if(product?.categoryId) {
                    const userData = await fetchCategoryById(product.categoryId);
                    setCategory(userData);
                }
            } catch (error) {
                console.error('Failed to fetch users:', error);
                // Handle errors or set error state as needed
            }
        };
        getCategory();
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
                        <p>Імя продавця</p>
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
                    <p>{product?.price ?? 0}</p>
                </div>

                <div className="info-button-cart" onClick={handleAddToCart}>
                    <p>Добавити в корзину</p>
                </div>
                <div className="info-button-message">
                    <p>Повідомлення</p>
                </div>
            </div>
        </div>
    );
}

export default ProductName;
