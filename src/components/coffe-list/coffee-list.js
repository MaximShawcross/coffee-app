import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCoffeeList, filteredCoffee } from "./coffeSlice";

import CoffeeListItem from "../coffee-list-item/coffee-list-item";
import Spinner from "../spinner/spinner";

import './coffee-list.scss';

const CoffeeList = () => {
    const filterCoffee = useSelector(filteredCoffee);
    let loadingStatus = useSelector(state => state.coffee.loadingStatus);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if( loadingStatus === "idle") {
            dispatch(fetchCoffeeList());
        }

    }, [loadingStatus, dispatch]);

    if(loadingStatus === "loading") {
        return <Spinner/>
    } else if (loadingStatus === "error"){
        return <h5 className = "error">something wrong!</h5>
    }


    const renderItems = (arr) => {
        return arr.map((coffee) => {
            return (
                <Link key = {coffee.id} to = {`/coffee-list/${coffee.id}`} > 
                    <CoffeeListItem id = {coffee.id} coffeeId = {coffee.id}  />                         
                </Link>               
            )
        })
    }

    const elements = renderItems(filterCoffee);

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