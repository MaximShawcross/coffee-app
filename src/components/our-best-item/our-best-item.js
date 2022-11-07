import coffeeIcon from "../../resources/list-items/item_2.png";
import './our-best-item.scss';


const OurBestItem = () => {
    return (
        <div className="best__container__item">
            <img src={coffeeIcon} className="best__container__item__img" alt="coffee-img"/>
            <div className="best__container__item__descr">Solimo Coffee Beans 2 kg</div> 
            <div className="best__container__item__price">10.73$</div>
        </div>
    )
}

export default OurBestItem;