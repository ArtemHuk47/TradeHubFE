import Category from "../components/category/Category";
import ProductItems from "../components/product/ProductItems";
import Search from "../components/search/Search";

function Main() {
    return (
        <div className="Main">

            <Search />
            <Category />
            <ProductItems />
        </div>
    );
}

export default Main;