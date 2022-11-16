import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectById } from "../coffe-list/coffeSlice";
import { priceGenerator } from "../../utils/price-generator";


import SingleCoffeeView from "../single-coffee-view/single-coffee-view";
import Spinner from "../spinner/spinner";
import './single-coffee.scss';

const SingleCoffee = () => {
    const {coffeeId} = useParams();

    const coffeeItem = useSelector(state => selectById(state, coffeeId));
    const loadingStatus = useSelector( state => state.coffee.coffeeLoadingStatus);


    if ( loadingStatus === "loading") {
        return <Spinner/>
    } 

    const {title, description, image} = coffeeItem;
    const price = priceGenerator();
    return ( <SingleCoffeeView price = {price} title = {title} description = {description} image = {image} /> );
}

export default SingleCoffee;