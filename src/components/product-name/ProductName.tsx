import React from 'react';

import "./ProductName.css";

function ProductName() {


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
                    <p>Назва категорії</p>
                </div>
                <div className="info-name">
                    <p>Назва товару</p>
                </div>
                <div className="info-price">
                    <p>9 999 грн.</p>
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
