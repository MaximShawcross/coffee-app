import { useSelector } from 'react-redux';

import OurBestItem from '../our-best-item/our-best-item';
import Spinner from '../spinner/spinner';

import './our-best.scss';

const OurBest = () => {
    const loadingStatus = useSelector(state => state.coffee.loadingStatus);

    const renderItems = () => {
        return (
            <>
                <OurBestItem coffeeId = {1}/>
                <OurBestItem coffeeId = {2}/>
                <OurBestItem coffeeId = {3}/>            
            </>
        )
    }

    const elements = loadingStatus === "success" ? renderItems() : <Spinner/>;

    return (
        <section className = "best">
            <div className="container">
                <div className="best__title">Our best</div>
                <div className="best__container">
                    {elements}
                </div>
            </div>
        </section>
    )
}

export default OurBest;