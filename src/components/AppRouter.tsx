import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import {ADD_ROUTE, CART_ROUTE, CHAT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PRODUCT_ROUTE, SEARCH_ROUTE} from "../utils/consts";
import Main from "../pages/Main";
import ProductPage from "../pages/ProductPage";
import Login from "../pages/Login";
import SearchPage from "../pages/SearchPage";
import AddPage from "../pages/AddPage";
import CartPage from "../pages/CartPage";
import ChatPage from "../pages/ChatPage";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={MAIN_ROUTE} replace />} />
            <Route path={MAIN_ROUTE} element={<Main />} />
            <Route path={SEARCH_ROUTE} element={<SearchPage />} />
            <Route path={PRODUCT_ROUTE} element={<ProductPage />} />
            <Route path={ADD_ROUTE} element={<AddPage />} />
            <Route path={LOGIN_ROUTE} element={<Login />} />
            <Route path={CART_ROUTE} element={<CartPage />} />
            <Route path={CHAT_ROUTE} element={<ChatPage />} />
        </Routes>
    );
}

export default AppRouter;
