import './about-beans.scss';
import coffeeBeans from '../../resources/icons/three-seeds-black.png';
import img from "../../resources/bg/second-page-block-2.png";

const AboutBeans = () => {
    return (
        <section className = "beans">
            <div className="container">
                <div className="beans__wrapper">
                    <div className="beans__img">
                        <img src= {img} alt=""/>
                    </div>
                    
                    <div className="beans__text">
                        <h2 className = "beans__text__header">
                            About our beans
                        </h2>
                        <div className="beans__seeds">
                            <div className="beans__seeds__divider"></div>
                            <img src= {coffeeBeans} alt="" className="beans__seeds__img"/>
                            <div className="beans__seeds__divider"></div>
                        </div>
                        <div className="beans__text__descr">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br/><br/>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </div>
                    </div>
                </div>
                <div className="beans__long-divider"></div>
            </div>
        </section>
    )
}

export default AboutBeans;