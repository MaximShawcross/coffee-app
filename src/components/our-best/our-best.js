import './our-best.scss';

import coffeeIcon from "../../resources/list-items/item_2.png";

const OurBest = () => {
    return (
        <section class = "best">
            <div class="container">
                <div class="best__title">Our best</div>

                <div class="best__container">
                    <div class="best__container__item">
                        <img src= {coffeeIcon} class="best__container__item__img" alt="coffee-img"/>
                        <div class="best__container__item__descr">Solimo Coffee Beans 2 kg</div> 
                        <div class="best__container__item__price">10.73$</div>
                    </div>
                    <div class="best__container__item">
                        <img src= {coffeeIcon} class="best__container__item__img" alt="coffee-img"/>
                        <div class="best__container__item__descr">Solimo Coffee Beans 2 kg</div> 
                        <div class="best__container__item__price">10.73$</div>
                    </div>
                    <div class="best__container__item">
                        <img src={coffeeIcon} class="best__container__item__img" alt="coffee-img"/>
                        <div class="best__container__item__descr">Solimo Coffee Beans 2 kg</div> 
                        <div class="best__container__item__price">10.73$</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurBest;