import "./Search.css"
import {SEARCH_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
import {useSearch} from "../../context/SearchContext";


function Search () {
    const navigate = useNavigate();

    const { setSearchText } = useSearch();

    const handleSearch = (inputText: string) => {
        setSearchText(inputText);
    };

    return (
        <div className="search">
            <div className="input">
                <input type="text" placeholder="&#x1F50E;&#xFE0E; Пошук товару" onChange={e => handleSearch(e.target.value)}/>
            </div>
            <div className="input-button" onClick={() => navigate(SEARCH_ROUTE)}>
                <p>Пошук &#x1F50E;&#xFE0E;</p>
            </div>
        </div>
    )
}

export default Search;