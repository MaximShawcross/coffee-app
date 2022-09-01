import { NavLink } from 'react-router-dom';

import './main-page-header.scss';
import coffeSeeds from '../../resources/icons/2-white-seeds.png'

const MainPageHeader = () => {
    return (
        <header>
            <div class="container">
                <div class = "header">
                    <nav class="header__nav">
                        <div class="header__nav__item">
                            <NavLink className={({isActive}) => isActive ? 'link' : null} to = "/">
                                <img src = {coffeSeeds} alt="coffee-seed"/>                        
                                Coffee house
                            </NavLink>
                        </div>
                        <NavLink className={({isActive}) => isActive ? 'link' : null } to = "/coffee-list">
                            <div class="header__nav__item">Our coffee</div>
                        </NavLink>
                        
                        {/* <div class="header__nav__item">For your pleasure</div> */}
                    </nav>
                    <h1 class="title">Everything You Love About Coffee</h1>
                    <div class="header__seeds">
                        <div class="header__seeds__divider"></div>
                        <img src="resources/icons/three-seeds.png" alt="" class="header__seeds__img"/>
                        <div class="header__seeds__divider"></div>
                    </div>

                    <div class="header__subheader">
                        <div class="header__subheader__item">We makes every day full of energy and taste</div>
                        <div class="header__subheader__item">Want to try our beans?</div>
                    </div>

                    <button class="header__button">
                        More
                    </button>
                </div>
            </div>
        </header>      
    )
}

export default MainPageHeader;