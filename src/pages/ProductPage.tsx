import Search from "../components/search/Search";
import CarouselBlock from "../components/carousel/Carousel";
import ProductName from "../components/product-name/ProductName";
import ProductDescription from "../components/product-description/ProductDescription";


function ProductPage() {
    return (
        <div className="product-page container">
            <Search />
            <div className="product-page-block">

                    <div className="page-block-left">
                        <CarouselBlock />

                        <ProductDescription />
                    </div>

                    <div className="page-block-right">
                        <ProductName />
                    </div>
            </div>




        </div>
    );
}

export default ProductPage;