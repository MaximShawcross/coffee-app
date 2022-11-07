import { Link, NavLink } from 'react-router-dom';

import './header.scss';
import coffeSeeds from '../../resources/icons/2-white-seeds.png'

const Header = () => {
    return (
        <section className = "second-header">
            <div className="container">
                <nav className="header__nav">
                        <div className="header__nav__item">
                            <NavLink className={({isActive}) => isActive ? 'link' : null} to = "/">
                                <img src = {coffeSeeds} alt="coffee-seed"/>                        
                                Coffee house
                            </NavLink>
                            
                        </div>
                    <NavLink className={({isActive}) => isActive ? 'link' : null} to = "/coffee-list">
                        <div className="header__nav__item">Our coffee</div>
                    </NavLink>
                    
                    {/* <div class="header__nav__item">For your pleasure</div> */}
                </nav>
                <h1 className="title">Our Coffee</h1>
            </div>
        </section>
    )
}

export default Header;