import { useSelector } from "react-redux";

import { selectById } from "../coffe-list/coffeSlice";

import "./coffee-list-item.scss";

const CoffeeListItem = ({coffeeId}) => {
    const coffee = useSelector(state => selectById(state, coffeeId));
    const {title, image, ingredients, price} = coffee;

    const coffeeIngridients = ingredients.join(", ").length < 21 ? ingredients.join(", ") : `${ingredients.join(", ").substring(0, 21)}...`;

    return (
        <li className="coffee__list__item" key = {coffeeId}>
            <img alt={title} src = {image} className="coffee__list__item__img"/>
            <h2 className="coffee__list__item__name">{title}</h2>
            <div className="coffee__list__item__country">{coffeeIngridients}</div>
            <div className="coffee__list__item__price">{price}$</div>
        </li>
    )
}

export default CoffeeListItem;