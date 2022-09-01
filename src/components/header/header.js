import './header.scss';
import coffeSeeds from '../../resources/icons/2-white-seeds.png'


const Header = () => {
    return (
        <section class = "header">
            <div class="container">
                <nav class="header__nav">
                    <div class="header__nav__item">
                        <img src = {coffeSeeds} alt="coffee-seed"/>                        
                        Coffee house
                    </div>
                    <div class="header__nav__item">Our coffee</div>
                    <div class="header__nav__item">For your pleasure</div>
                </nav>
                <h1 class="title">Our Coffee</h1>
            </div>
        </section>
    )
}

export default Header;