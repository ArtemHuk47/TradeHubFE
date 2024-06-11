import {
    MAIN_ROUTE,
    LOGIN_ROUTE,
    SEARCH_ROUTE,
    ADD_ROUTE,
    PRODUCT_ROUTE, CART_ROUTE, CHAT_ROUTE
} from "./utils/consts"; // Імпорт рядкових констант для шляхів.

import Main from "./pages/Main";
import ProductPage from "./pages/ProductPage";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import SearchPage from "./pages/SearchPage";
import AddPage from "./pages/AddPage";
import CartPage from "./pages/CartPage";
import ChatPage from "./pages/ChatPage";


export const authRoutes = [

]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: SEARCH_ROUTE,
        Component: SearchPage
    },
    {
        path: ADD_ROUTE,
        Component: AddPage
    },
    {
        path: PRODUCT_ROUTE,
        Component: ProductPage
    },
    {
        path: CART_ROUTE,
        Component: CartPage
    },
    {
        path: CHAT_ROUTE,
        Component: ChatPage
    }
];

function AppRouter() {
    return (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
        </Routes>
    );
}

