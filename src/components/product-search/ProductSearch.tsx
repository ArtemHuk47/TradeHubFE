import "./ProductSearch.css"
import ProductLong from "../product-long/ProductLong";


function ProductSearch () {
    return (
        <div className="product-search">


            <div className="product-search-title">
                <p>Ми знайшли 420 оголошень</p>
            </div>

            <div className="product-search-list">
                <ProductLong />
                <ProductLong />
                <ProductLong />
                <ProductLong />
                <ProductLong />
                <ProductLong />
                <ProductLong />
                <ProductLong />

            </div>

            <ul>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>...</li>
                <li>11</li>
                <li> &#10148; </li>
            </ul>
        </div>
    )
}

export default ProductSearch;