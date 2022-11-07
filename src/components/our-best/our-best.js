import './our-best.scss';
import OurBestItem from '../our-best-item/our-best-item';

const OurBest = () => {
    return (
        <section className = "best">
            <div className="container">
                <div className="best__title">Our best</div>

                <div className="best__container">
                    <OurBestItem/>
                    <OurBestItem/>
                    <OurBestItem/>
                </div>
            </div>
        </section>
    )
}

export default OurBest;