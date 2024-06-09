import React from 'react';
import "./ProductDescription.css";
import {Product} from "../../models/models";

interface ProductDescriptionProps {
    product: Product | null
}
function ProductDescription({product}: ProductDescriptionProps) {

    return (
        <div className="product-description">
            <div className="description-title">
                <p>Опис</p>
            </div>
            <div className="description-description">
                <p>{product?.description ?? ""}</p>
            </div>
        </div>
    );
}

export default ProductDescription;
