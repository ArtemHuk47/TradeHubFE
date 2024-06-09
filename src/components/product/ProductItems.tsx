import "./ProductItems.css"
import ProductItem from "../product-item/ProductItem";
import {Product} from "../../models/models";
import {useEffect, useState} from "react";
import {fetchProducts} from "../../api/productApi";


function ProductItems () {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const userData = await fetchProducts();
                setProducts(userData);
            } catch (error) {
                console.error('Failed to fetch users:', error);
                // Handle errors or set error state as needed
            }
        };

        getUsers();
    }, []);

    return (
        <div className="product">
           <div className="product-title">
                <p>Оголошення</p>
            </div>

            <div className="product-list">
                {
                    products.map(x => <ProductItem product={x}/>)
                }
            </div>
        </div>
    )
}

export default ProductItems;