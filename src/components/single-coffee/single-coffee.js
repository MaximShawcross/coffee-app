import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectById } from "../coffe-list/coffeSlice";

import SingleCoffeeView from "../single-coffee-view/single-coffee-view";
import Spinner from "../spinner/spinner";

import './single-coffee.scss';

const SingleCoffee = () => {
    const {coffeeId} = useParams();

    const coffeeItem = useSelector(state => selectById(state, coffeeId));
    const loadingStatus = useSelector( state => state.coffee.coffeeLoadingStatus);
    
    useEffect(() => { 
        console.log(coffeeItem);
    }, [coffeeItem]);

    if ( loadingStatus === "loading") {
        return <Spinner/>
    } 

    const {title, description, image} = coffeeItem;
    return ( <SingleCoffeeView title = {title} description = {description} image = {image} /> );
}

export default SingleCoffee;