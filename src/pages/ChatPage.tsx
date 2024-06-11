import Search from "../components/search/Search";
import CarouselBlock from "../components/carousel/Carousel";
import ProductName from "../components/product-name/ProductName";
import ProductDescription from "../components/product-description/ProductDescription";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {fetchProductById, fetchProductImages} from "../api/productApi";
import {Category, Product} from "../models/models";
import {fetchCategoryById} from "../api/categoryApi";
import ProductCartItem from "../components/product/ProductCartItem";


function ChatPage() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null); // Define the state based on your product structure
    const [images, setImages] = useState<string[] | null>(null);

    useEffect(() => {
        const getCategory = async () => {
            if (id) {
                const productId = Number(id)
                const p = await fetchProductById(productId);
                setProduct(p);
                console.log('s', product?.id)
                if(p?.id){
                    const imgs = await fetchProductImages(p.id);
                    if (imgs) {
                        if(!images){
                            setImages(imgs);
                            console.log(imgs)
                        }

                    }
                }

            }
        };
        getCategory();

    }, [id, images]);

    console.log(images)

    return (
        <div className="product-page container">
            <div className="product-page-block">

                <div className="page-block-left">
                    <p>dsasdf</p>
                </div>

                <div className="page-block-right">
                    <div className="product-search-list">
                        <p>dsasdf</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ChatPage;