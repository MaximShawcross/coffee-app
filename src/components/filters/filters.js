import FilterSearch from '../filters-search/filters-search';
import FilterButton from '../filters-button/filters-button';

import './filters.scss';

const Filter = () => {
    return (
        <section className="products">
            <div className="container">
                <div className="products__filters">
                    <FilterSearch/>
                    <div className="products__filters__item">
                        <div className="products__filters__item__text">Or filter</div>
                        <FilterButton filterName={"Espresso"}/>
                        <FilterButton filterName={"Milk"}/>
                        <FilterButton filterName={"Foam"}/>
                        <FilterButton filterName={"all"}/>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Filter;