import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectAll, coffeeFetched, coffeeFetching, coffeeFetchingError,} from "./coffeSlice";
import { fetchCoffeeList } from "./coffeSlice";

import './coffee-list.scss';

const CoffeeList = () => {
    // const coffee = useSelector(selectAll);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoffeeList())
        // eslint-disable-next-line
    }, []);

    return (
        <section className="coffee">
            <div className="container">
                <ul className="coffee__list">
                    <li className="coffee__list__item">
                        <img src="resources/list-items/item_1.png" alt="" className="coffee__list__item__img"/>
                        <h2 className="coffee__list__item__name">AROMISTICO Coffee 1 kg</h2>
                        <div className="coffee__list__item__country">Kenya</div>
                        <div className="coffee__list__item__price">6.99$</div>
                    </li>
                    <li className="coffee__list__item">
                        <img src="resources/list-items/item_1.png" alt="" className="coffee__list__item__img"/>
                        <h2 className="coffee__list__item__name">AROMISTICO Coffee 1 kg</h2>
                        <div className="coffee__list__item__country">Kenya</div>
                        <div className="coffee__list__item__price">6.99$</div>
                    </li>
                    <li className="coffee__list__item">
                        <img src="resources/list-items/item_1.png" alt="" className="coffee__list__item__img"/>
                        <h2 className="coffee__list__item__name">AROMISTICO Coffee 1 kg</h2>
                        <div className="coffee__list__item__country">Kenya</div>
                        <div className="coffee__list__item__price">6.99$</div>
                    </li>
                    <li className="coffee__list__item">
                        <img src="resources/list-items/item_1.png" alt="" className="coffee__list__item__img"/>
                        <h2 className="coffee__list__item__name">AROMISTICO Coffee 1 kg</h2>
                        <div className="coffee__list__item__country">Kenya</div>
                        <div className="coffee__list__item__price">6.99$</div>
                    </li>
                    <li className="coffee__list__item">
                        <img src="resources/list-items/item_1.png" alt="" className="coffee__list__item__img"/>
                        <h2 className="coffee__list__item__name">AROMISTICO Coffee 1 kg</h2>
                        <div className="coffee__list__item__country">Kenya</div>
                        <div className="coffee__list__item__price">6.99$</div>
                    </li>
                    <li className="coffee__list__item">
                        <img src="resources/list-items/item_1.png" alt="" className="coffee__list__item__img"/>
                        <h2 className="coffee__list__item__name">AROMISTICO Coffee 1 kg</h2>
                        <div className="coffee__list__item__country">Kenya</div>
                        <div className="coffee__list__item__price">6.99$</div>
                    </li>
                    
                </ul>
            </div>
        </section>
    )
}

export default CoffeeList;