import './footer.scss';
import threeCoffeeSeeds from '../../resources/icons/three-seeds-black.png';
import twoCoffeeSeeds from '../../resources/icons/two-seeds-black.png';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <nav className="footer__nav">
                    <div className="footer__nav__item">
                        <img src = {twoCoffeeSeeds} alt="coffee-seed"/>                        
                        Coffee house
                    </div>
                    <div className="footer__nav__item">Our coffee</div>
                    <div className="footer__nav__item">For your pleasure</div>
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