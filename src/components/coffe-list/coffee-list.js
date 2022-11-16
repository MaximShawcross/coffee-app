import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCoffeeList, selectIds } from "./coffeSlice";

import CoffeeListItem from "../coffee-list-item/coffee-list-item";
import Spinner from "../spinner/spinner";

import './coffee-list.scss';

const CoffeeList = () => {
    const coffee = useSelector(selectIds);
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
        return arr.map((id) => {
            return (
                <Link key = {id} to = {`/coffee-list/${id}`} > 
                    <CoffeeListItem id = {id} coffeeId = {id}  />                         
                </Link>               
            )
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