import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectById } from '../coffe-list/coffeSlice';

import './our-best-item.scss';

const OurBestItem = ({coffeeId}) => {
    const coffee = useSelector(state => selectById(state, coffeeId));
    const {image, title, price} = coffee;

    return (
        <Link className='best__container__item' to = {`/coffee-list/${coffeeId}`} >
                <img src={image} className="best__container__item__img" alt="coffee-img"/>
                <div className="best__container__item__title">{title}</div> 
                <div className="best__container__item__price">{price}$</div>
        </Link>
    )
}

export default OurBestItem;