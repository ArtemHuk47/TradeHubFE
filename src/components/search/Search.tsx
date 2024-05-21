import "./Search.css"
import {SEARCH_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";


function Search () {
    const navigate = useNavigate();

    return (
        <div className="search">
            <div className="input">
                <input type="text" placeholder="&#x1F50E;&#xFE0E; Пошук товару" />
            </div>
            <div className="input-button" onClick={() => navigate(SEARCH_ROUTE)}>
                <p>Пошук &#x1F50E;&#xFE0E;</p>
            </div>
        </div>
    )
}

export default Search;