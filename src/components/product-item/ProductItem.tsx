import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProductItem.css";
import { PRODUCT_ROUTE } from "../../utils/consts";
import {Category, Product} from "../../models/models";
import {fetchProductImages, fetchProducts} from "../../api/productApi";
import {fetchCategoryById} from "../../api/categoryApi";

interface ProductItemProps {
    product: Product
}
function ProductItem({product}: ProductItemProps) {
    const navigate = useNavigate();
    const [category, setCategory] = useState<Category>();
    const [image, setImage] = useState<string>("");
    useEffect(() => {
        const getCategory = async () => {
            try {
                const userData = await fetchCategoryById(product.categoryId);
                setCategory(userData);
                const images = await fetchProductImages(product.id);
                if (images.length > 0) {
                    setImage(images[0]);
                    console.log(images[0])// Set the first image URL if available
                }
            } catch (error) {
                console.error('Failed to fetch users:', error);
                // Handle errors or set error state as needed
            }
        };
        getCategory();
    }, []);

    const handleNavigate = () => {
        navigate(`${PRODUCT_ROUTE.replace(':id', product.id.toString())}`);
    };

    return (
        <div className="product-item" onClick={handleNavigate}>
            <div className="product-item-image">
                {image ? <img src={`http://localhost:5292/${image}`} alt={product.name}/> : <p></p>}
            </div>

            <div className="product-item-description">
                <p className="description-title">{product.name}</p>
                <p className="description-price">{product.price} Грн</p>
                <p className="description-category">{category?.name ?? ""}</p>
            </div>
        </div>
    );
}

export default ProductItem;
