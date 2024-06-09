import React, {useEffect, useState} from 'react';

import "./ProductName.css";
import {Category, Product} from "../../models/models";
import {fetchCategoryById} from "../../api/categoryApi";
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

                <div className="info-button-cart">
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
