import Category from "../components/category/Category";
import Product from "../components/product/Product";
import Search from "../components/search/Search";

function Main() {
    return (
        <div className="Main">

            <Search />
            <Category />
            <Product />
        </div>
    );
}

export default Main;