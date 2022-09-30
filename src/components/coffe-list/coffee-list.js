import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCoffeeList } from "./coffeSlice";

import CoffeeListItem from "../coffee-list-item/coffee-list-item";
import Spinner from "../spinner/spinner";

import './coffee-list.scss';

const CoffeeList = () => {
    const coffee = useSelector(state => state.coffee);
    const coffeeLoadingStatus = useSelector(state => state.coffee.coffeeLoadingStatus);
    // const coffeItem = useSelector(state => state.coffeItem)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoffeeList());
        // eslint-disable-next-line
    }, []);

    if(coffeeLoadingStatus === "loading") {
        return <Spinner/>
    } else if (coffeeLoadingStatus === "error"){
        return <h5 className = "error">something wrong!</h5>
    }


    const renderItems = (arr, counter) => {
        if (arr.length === 0) {
            return <Spinner/>
        } 
        
        const ids = Object.values(arr.ids);
        const items = Object.values(arr.entities);

        return items.map((item, i) => {

            if (i < 17) {            
                const ingredients = item.ingredients[0];

                return (
                    <Link key = {ids[i]} to = {`/coffee-list/${ids[i]}`} > 
                        <CoffeeListItem id = {ids[i]}  image = {item.image} title = {item.title} ingredients = {ingredients} />                         
                    </Link>               
                )
                   
            }
            
        })
    }

    const elements = renderItems(coffee);

    return (
        <section className="coffee">
            <div className="container">
                <ul className="coffee__list">
                    {elements}
                </ul>
                {/* <button className="button">Click me!</button> */}
            </div>
        </section>
    )
}

export default CoffeeList;