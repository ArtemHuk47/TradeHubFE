import "./Header.css"
import logo from "../../images/TradeHub.png"
import message from "../../images/Message.png"
import cart from "../../images/Cart.png"
import person from "../../images/Person.png"
import {ADD_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PRODUCT_ROUTE} from "../../utils/consts";
import { useNavigate } from 'react-router-dom';

function Header () {
    const navigate = useNavigate();


    return (
        <header>
            <div className="header">
                <div className="logo" onClick={() => navigate(MAIN_ROUTE)}>
                    <img src={logo} alt=""/>
                </div>
                <div className="nav">
                    <div className="nav-link">
                        <img src={message} alt=""/>
                        <p>Повідомлення</p>
                    </div>
                    <div className="nav-link">
                        <img src={cart} alt=""/>
                        <p>Корзина</p>
                    </div>
                    <div className="nav-link" onClick={() => navigate(LOGIN_ROUTE)}>
                        <img src={person} alt=""/>
                        <p>Ваш профіль</p>
                    </div>
                    <div className="nav-button" onClick={() => navigate(ADD_ROUTE)}>
                        <p >Додати оголошення</p>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;