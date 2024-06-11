import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProductLong.css";
import { PRODUCT_ROUTE } from "../../utils/consts";
import {Category, Product} from "../../models/models";
import {fetchCategoryById} from "../../api/categoryApi";
import {fetchProductImages} from "../../api/productApi";

interface ProductLongProps {
    product: Product
}

function ProductLong({product} : ProductLongProps) {
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
        <div className="product-long" onClick={handleNavigate}>

            <div className="product-long-image">
                {image ? <img src={`http://localhost:5292/${image}`} alt={product.name}/> : <p>No Image Available</p>}
            </div>

            <div className="product-long-description">
                <p className="description-title">{product.name}</p>
                <p className="description-price">{product.price}</p>
                <p className="description-category">{category?.name ?? ""}</p>
            </div>
        </div>
    );
}

export default ProductLong;
