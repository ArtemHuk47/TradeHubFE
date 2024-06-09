import Search from "../components/search/Search";
import CarouselBlock from "../components/carousel/Carousel";
import ProductName from "../components/product-name/ProductName";
import ProductDescription from "../components/product-description/ProductDescription";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchProductById} from "../api/productApi";
import {Category, Product} from "../models/models";
import {fetchCategoryById} from "../api/categoryApi";


function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null); // Define the state based on your product structure


    useEffect(() => {
        if (id) {
            const productId = Number(id)
            fetchProductById(productId).then(setProduct).catch(console.error);
        }
    }, [id]);



    return (
        <div className="product-page container">
            <Search />
            <div className="product-page-block">

                    <div className="page-block-left">
                        <CarouselBlock />

                        <ProductDescription product={product}/>
                    </div>

                    <div className="page-block-right">
                        <ProductName product={product}/>
                    </div>
            </div>




        </div>
    );
}

export default ProductPage;