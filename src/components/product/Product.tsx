import "./Product.css"
import ProductItem from "../product-item/ProductItem";


function Product () {
    return (
        <div className="product">
           <div className="product-title">
                <p>Оголошення</p>
            </div>

            <div className="product-list">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />

            </div>
        </div>
    )
}

export default Product;