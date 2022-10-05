import { useEffect } from "react";

import { fetchCoffeeItem, coffeeItemFetched, coffeeItemFetching } from "../coffee-list-item/coffee-list-item-slice";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import SingleCoffeeView from "../single-coffee-view/single-coffee-view";
import Spinner from "../spinner/spinner";

import './single-coffee.scss';

const SingleCoffee = () => {
    const {coffeeId} = useParams();
    const dispatch = useDispatch();
    const coffeeItem = useSelector(state => state.coffeeItem);
    const loadingStatus = useSelector( state => state.coffeeItem.coffeeItemLoadingStatus);
    
    useEffect(() => { 
        dispatch(coffeeItemFetching());

        dispatch(fetchCoffeeItem(coffeeId))
        .catch(err => console.error(err))
    }, [coffeeId]);

    if ( loadingStatus === "loading") {
        return <Spinner/>
    } 


    // console.log(Object.values(coffeeItem.entities).pop());
    const {title, description, image} = Object.values(coffeeItem.entities).pop();

    return (
        <SingleCoffeeView title = {title} description = {description} image = {image}/>
    )
    
}

export default SingleCoffee;