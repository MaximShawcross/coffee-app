import { NavLink } from 'react-router-dom';

import threeCoffeeSeeds from '../../resources/icons/three-seeds-black.png';
import twoCoffeeSeeds from '../../resources/icons/two-seeds-black.png';

import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <nav className="footer__nav">
                    <div className="footer__nav__item">
                        <NavLink className={({isActive}) => isActive ? 'link' : 'black' } to = "/">
                            <img src = {twoCoffeeSeeds} alt="coffee-seed"/>                        
                            Coffee house
                        </NavLink>
                    </div>
                    <div className="footer__nav__item">
                        <NavLink className={({isActive}) => isActive ? 'link' : 'black' } to = "/coffee-list">
                            Our coffee
                        </NavLink>   
                    </div>
                </nav>
                <div className="footer__seeds">
                    <div className="footer__seeds__divider"></div>
                    <img src= {threeCoffeeSeeds} alt="" className="footer__seeds__img"/>
                    <div className="footer__seeds__divider"></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;