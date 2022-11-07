import './about-us.scss';
import blackSeeds from "../../resources/icons/three-seeds-black.png";

const AboutUs = () => {

    return (
        <section className = "about">
            <div className="container">
                <div className="about__title">About Us</div>
            <div className="about__seeds">
                <div className="about__seeds__divider"></div>
                <img src={blackSeeds} alt="" className="about__seeds__img"/>
                <div className="about__seeds__divider"></div>
            </div>

            <div className="about__text">   Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face. <br/><br/>
                
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.</div>
            </div>
        </section>
    )
}

export default AboutUs;