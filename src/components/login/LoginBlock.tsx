import React from 'react';
import "./LoginBlock.css"
import logo from "../../images/TradeHub.png"

function LoginBlock() {
    return (
        <div className="login-block">
            <div className="login-switch">
                <div className="switch-button">
                    <p>Увійти</p>
                </div>
                <div className="switch-button">
                    <p>Зареєструватися</p>
                </div>
            </div>

            <div className="login-inputs">
                <div className="login-input">
                    <p>Електронна пошта чи телефон</p>
                    <input type="text"/>
                </div>
                <div className="login-input">
                    <p>Пароль</p>
                    <input type="text"/>
                </div>
            </div>

            <div className="login-down">
                <div className="login-forgot">
                    <p>Забули пароль?</p>
                </div>
                <div className="login-button">
                    <p>Увійти</p>
                </div>

            </div>
        </div>
    );
};

export default LoginBlock;