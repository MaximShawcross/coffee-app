import './filters.scss';

const Filter = () => {
    return (
        <section className="products">
            <div className="container">
                <div className="products__filters">
                    <div className="products__filters__item">
                        <div className="products__filters__item__text">Lookiing for</div>
                        <input type="text" className="products__filters__item__input" placeholder="start typing here..."/>
                    </div>
                    <div className="products__filters__item">
                        <div className="products__filters__item__text">Or filter</div>
                        <button className="products__filters__item__button">Brazil</button>
                        <button className="products__filters__item__button">Kenya</button>
                        <button className="products__filters__item__button">Columbia</button>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Filter;