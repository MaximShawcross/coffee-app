import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { fetchCoffeeList } from "../components/coffe-list/coffeSlice";

import { MainPage, CoffeeListPage, SingleCoffeePage } from "../pages";

import "./App.scss"

const App = () => {
    const dispatch = useDispatch();
    let loadingStatus = useSelector(state => state.coffee.loadingStatus);
    
    useEffect(() => {
        if( loadingStatus === "idle") {
            dispatch(fetchCoffeeList());
        }

    }, [loadingStatus, dispatch]);

    return (
        <Router>
            <Routes>
                <Route path = "/" element = {<MainPage/>}/>
                <Route path = "/coffee-list" element = { <CoffeeListPage/> }/>
                <Route path = "/coffee-list/:coffeeId" element = { <SingleCoffeePage/> }/>          
            </Routes>
        </Router>

    )   
}

export default App;