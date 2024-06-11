import "./ProductSearch.css"
import ProductLong from "../product-long/ProductLong";
import {useEffect, useState} from "react";
import {Product, ProductSearchDto} from "../../models/models";
import {fetchProducts, searchProducts} from "../../api/productApi";
import ProductItem from "../product-item/ProductItem";
import {useSearch} from "../../context/SearchContext";


function ProductSearch () {
    const { searchText } = useSearch();
    console.log(searchText)
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            try {

                const userData = await searchProducts({ searchTerm: searchText }as ProductSearchDto);
                setProducts(userData);
            } catch (error) {
                console.error('Failed to fetch users:', error);
                // Handle errors or set error state as needed
            }
        };

        getUsers();
    }, [searchText]);

    return (
        <div className="product-search">


            <div className="product-search-title">
                <p>Ми знайшли 420 оголошень</p>
            </div>

            <div className="product-search-list">
                {
                    products.map(x => <ProductLong product={x}/>)
                }

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