import "./Category.css"
import football from "../../images/football.png"
import elect from "../../images/power-socket.png"
import chair from "../../images/office-chair.png"
import cloth from "../../images/t-shirt.png"
import accs from "../../images/scrunchie.png"


function Category () {
    return (
        <div className="category">
           <div className="category-title">
                <p>Категорія</p>
           </div>
           <div className="category-block">
            <div className="item">
                <div className="icon">
                    <img src={elect} alt="Elect"/>
                </div>
                <p>Електроніка</p>
            </div>
            <div className="item">
                <div className="icon">
                    <img src={football} alt="Football"/>
                </div>
                <p>Спорт</p>
            </div>
            <div className="item">
                <div className="icon">
                    <img src={cloth} alt="Cloth"/>
                </div>
                <p>Одяг</p>
            </div>
            <div className="item">
                <div className="icon">
                    <img src={accs} alt="Accs"/>
                </div>
                <p>Аксесуари</p>
            </div>
            <div className="item">
                <div className="icon">
                    <img src={chair} alt="Chair"/>
                </div>
                <p>Дім</p>
            </div>
           </div>
        </div>
    )
}

export default Category;