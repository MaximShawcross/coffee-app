import { Link, NavLink } from 'react-router-dom';

import './header.scss';
import coffeSeeds from '../../resources/icons/2-white-seeds.png'

const Header = () => {
    return (
        <section class = "second-header">
            <div class="container">
                <nav class="header__nav">
                        <div class="header__nav__item">
                            <NavLink className={({isActive}) => isActive ? 'link' : null} to = "/">
                                <img src = {coffeSeeds} alt="coffee-seed"/>                        
                                Coffee house
                            </NavLink>
                            
                        </div>
                    <NavLink className={({isActive}) => isActive ? 'link' : null} to = "/coffee-list">
                        <div class="header__nav__item">Our coffee</div>
                    </NavLink>
                    
                    {/* <div class="header__nav__item">For your pleasure</div> */}
                </nav>
                <h1 class="title">Our Coffee</h1>
            </div>
        </section>
    )
}

export default Header;