import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProductItem.css";
import { PRODUCT_ROUTE } from "../../utils/consts";

function ProductItem() {
    const navigate = useNavigate();

    return (
        <div className="product-item" onClick={() => navigate(PRODUCT_ROUTE)}>
            <div className="product-item-image">
                <p></p>
            </div>

            <div className="product-item-description">
                <p className="description-title">Lorem Ipsum — це просто фіктивний текст</p>
                <p className="description-price">10 000 грн.</p>
                <p className="description-category">Категорія — назва категорії</p>
            </div>
        </div>
    );
}

export default ProductItem;
