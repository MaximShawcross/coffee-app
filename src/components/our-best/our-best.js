import './our-best.scss';

import coffeeIcon from "../../resources/list-items/item_2.png";

const OurBest = () => {
    return (
        <section className = "best">
            <div className="container">
                <div className="best__title">Our best</div>

                <div className="best__container">
                    <div className="best__container__item">
                        <img src= {coffeeIcon} className="best__container__item__img" alt="coffee-img"/>
                        <div className="best__container__item__descr">Solimo Coffee Beans 2 kg</div> 
                        <div className="best__container__item__price">10.73$</div>
                    </div>
                    <div className="best__container__item">
                        <img src= {coffeeIcon} className="best__container__item__img" alt="coffee-img"/>
                        <div className="best__container__item__descr">Solimo Coffee Beans 2 kg</div> 
                        <div className="best__container__item__price">10.73$</div>
                    </div>
                    <div className="best__container__item">
                        <img src={coffeeIcon} className="best__container__item__img" alt="coffee-img"/>
                        <div className="best__container__item__descr">Solimo Coffee Beans 2 kg</div> 
                        <div className="best__container__item__price">10.73$</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurBest;