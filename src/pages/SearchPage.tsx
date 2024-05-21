import React from 'react';
import Search from "../components/search/Search";
import ProductLong from "../components/product-long/ProductLong";
import ProductSearch from "../components/product-search/ProductSearch";



function SearchPage() {


    return (
        <div className="search-page">
            <Search />

            <ProductSearch />

        </div>
    );
}

export default SearchPage;