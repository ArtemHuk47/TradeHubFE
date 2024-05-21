import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProductLong.css";
import { PRODUCT_ROUTE } from "../../utils/consts";

function ProductLong() {
    const navigate = useNavigate();

    return (
        <div className="product-long" onClick={() => navigate(PRODUCT_ROUTE)}>

            <div className="product-long-image">
                <p></p>
            </div>

            <div className="product-long-description">
                <p className="description-title">Lorem Ipsum — це просто фіктивний текст</p>
                <p className="description-price">10 000 грн.</p>
                <p className="description-category">Категорія — назва категорії</p>
            </div>
        </div>
    );
}

export default ProductLong;
