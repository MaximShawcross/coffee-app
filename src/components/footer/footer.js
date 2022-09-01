import './footer.scss';
import threeCoffeeSeeds from '../../resources/icons/three-seeds-black.png';
import twoCoffeeSeeds from '../../resources/icons/two-seeds-black.png';

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <nav class="footer__nav">
                    <div class="footer__nav__item">
                        <img src = {twoCoffeeSeeds} alt="coffee-seed"/>                        
                        Coffee house
                    </div>
                    <div class="footer__nav__item">Our coffee</div>
                    <div class="footer__nav__item">For your pleasure</div>
                </nav>
                <div class="footer__seeds">
                    <div class="footer__seeds__divider"></div>
                    <img src= {threeCoffeeSeeds} alt="" class="footer__seeds__img"/>
                    <div class="footer__seeds__divider"></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;