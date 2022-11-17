import { NavLink } from 'react-router-dom';

import './main-page-header.scss';
import coffeSeeds from '../../resources/icons/2-white-seeds.png'
import whiteSeeds from "../../resources/icons/three-seeds.png";

const MainPageHeader = () => {
    return (
        <header>
            <div className="container">
                <div className = "header">
                    <nav className="header__nav">
                        <div className="header__nav__item">
                            <NavLink className={({isActive}) => isActive ? 'link' : null} to = "/">
                                <img src = {coffeSeeds} alt="coffee-seed"/>                        
                                Coffee house
                            </NavLink>
                        </div>
                        <NavLink className={({isActive}) => isActive ? 'link' : null } to = "/coffee-list">
                            <div className="header__nav__item">Our coffee</div>
                        </NavLink>
                        
                        {/* <div className="header__nav__item">For your pleasure</div> */}
                    </nav>
                    <h1 className="title">Everything You Love About Coffee</h1>
                    <div className="header__seeds">
                        <div className="header__seeds__divider"></div>
                        <img src= {whiteSeeds} alt="" className="header__seeds__img"/>
                        <div className="header__seeds__divider"></div>
                    </div>

                    <div className="header__subheader">
                        <div className="header__subheader__item">We makes every day full of energy and taste</div>
                        <div className="header__subheader__item">Want to try our beans?</div>
                    </div>
                    <NavLink className={({isActive}) => isActive ? 'link' : null } to = "/coffee-list">
                        <button className="header__button">
                            More
                        </button>
                    </NavLink>
                    
                </div>
            </div>
        </header>      
    )
}

export default MainPageHeader;