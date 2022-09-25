import "./coffee-list-item.scss";

const CoffeeListItem = ({ingredients, image, title}) => {

    return (
        <li className="coffee__list__item">
            <img src= {image} alt="" className="coffee__list__item__img"/>
            <h2 className="coffee__list__item__name">{title}</h2>
            <div className="coffee__list__item__country">{ingredients}</div>
            <div className="coffee__list__item__price">6.99$</div>
        </li>
    )
}

export default CoffeeListItem;