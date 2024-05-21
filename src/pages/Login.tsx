import React from 'react';
import LoginBlock from "../components/login/LoginBlock";
import CarouselBlock from "../components/carousel/Carousel";
import logo from "../images/TradeHub.png";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTE} from "../utils/consts";


function Login() {
    const navigate = useNavigate();

    return (
        <div className="login">
            <img src={logo} alt="" onClick={() => navigate(MAIN_ROUTE)}/>
            <LoginBlock />



        </div>
    );
}

export default Login;