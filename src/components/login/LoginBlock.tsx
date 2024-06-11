import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios with `npm install axios`
import "./LoginBlock.css";
import logo from "../../images/TradeHub.png";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTE, SEARCH_ROUTE} from "../../utils/consts";

function LoginBlock() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // although not used, prepared for future integration
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await axios.get(`http://localhost:5292/api/User/email/${encodeURIComponent(email)}`);
            if (response.data) {
                // Assuming response.data has a structure { id: "user123", email: "email", ... }
                localStorage.setItem('userId', response.data.id);
                console.log('User ID saved to local storage:', response.data.id);
                // Handle successful login here (e.g., redirect, show dashboard, etc.)
            }
        } catch (error) {
            console.error('Failed to fetch user:', error);
            // Handle errors here (e.g., show error message)
        }

        navigate(MAIN_ROUTE)
    };

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
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="login-input">
                    <p>Пароль</p>
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            <div className="login-down">
                <div className="login-forgot">
                    <p>Забули пароль?</p>
                </div>
                <div className="login-button" onClick={handleLogin}>
                    <p>Увійти</p>
                </div>
            </div>
        </div>
    );
}

export default LoginBlock;
