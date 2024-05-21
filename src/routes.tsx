import {
    MAIN_ROUTE,
    LOGIN_ROUTE,
    SEARCH_ROUTE,
    ADD_ROUTE,
    PRODUCT_ROUTE
} from "./utils/consts"; // Імпорт рядкових констант для шляхів.

import Main from "./pages/Main";
import ProductPage from "./pages/ProductPage";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import SearchPage from "./pages/SearchPage";
import AddPage from "./pages/AddPage";


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

