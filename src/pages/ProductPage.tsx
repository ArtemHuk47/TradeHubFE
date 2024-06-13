import Search from "../components/search/Search";
import CarouselBlock from "../components/carousel/Carousel";
import ProductName from "../components/product-name/ProductName";
import ProductDescription from "../components/product-description/ProductDescription";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchProductById, fetchProductImages, setCategoryId} from "../api/productApi";
import {Category, Product} from "../models/models";
import {fetchCategoryById} from "../api/categoryApi";


function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null); // Define the state based on your product structure
    const [images, setImages] = useState<string[] | null>(null);

    useEffect(() => {
        const getCategory = async () => {
            if (id) {
                const productId = Number(id)
                const p = await fetchProductById(productId);
                await setCategoryId(p?.categoryId)
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
            <Search />
            <div className="product-page-block">

                    <div className="page-block-left">
                        <CarouselBlock imageUrls={images ?? []}/>

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