import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MainPage, CoffeeListPage } from "../../pages";

import "./App.scss"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path = "/" element = {<MainPage/>}/>
                <Route path = "/coffee-list" element = { <CoffeeListPage/> }/>            
            </Routes>
        </Router>

    )   
}

export default App;