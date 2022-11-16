import { useSelector } from "react-redux";

import { selectById } from "../coffe-list/coffeSlice";

import "./coffee-list-item.scss";

const CoffeeListItem = ({coffeeId}) => {
    const coffee = useSelector(state => selectById(state, coffeeId));
    const {title, image} = coffee;
    console.log(coffee);
    return (
        <li className="coffee__list__item" key = {coffeeId}>
            <img alt={title} src = {image} className="coffee__list__item__img"/>
            <h2 className="coffee__list__item__name">{title}</h2>
            <div className="coffee__list__item__country">Nice</div>
            <div className="coffee__list__item__price">6.99$</div>
        </li>
    )
}

export default CoffeeListItem;