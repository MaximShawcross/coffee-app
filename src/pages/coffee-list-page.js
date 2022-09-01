import Header from "../components/header/header";
import AboutBeans from "../components/about-beans/about-beans";
import Filter from "../components/filters/filters";
import CoffeeList from "../components/coffe-list/coffee-list";
import Footer from "../components/footer/footer";

const CoffeeListPage = () => {
    return (
        <>
            <Header/>
            <AboutBeans/>
            <Filter/>
            <CoffeeList/>
            <Footer/>
        </>
    )
}

export default CoffeeListPage;