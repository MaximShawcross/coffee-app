import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectById } from "../coffe-list/coffeSlice";

import SingleCoffeeView from "../single-coffee-view/single-coffee-view";

import './single-coffee.scss';

const SingleCoffee = () => {
    const { coffeeId } = useParams();
    const coffeeItem = useSelector(state => selectById(state, coffeeId));
    const {title, description, image, price} = coffeeItem;

    return ( <SingleCoffeeView price = {price} title = {title} description = {description} image = {image} /> );
}

export default SingleCoffee;