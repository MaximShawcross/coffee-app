import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MainPage, CoffeeListPage, SingleCoffeePage } from "../../pages";

import "./App.scss"

const App = () => {
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