import seeds from "../../resources/icons/three-seeds-black.png";

const SingleCoffeeView = ({image, title, description}) => {

    return (
        <div className="single-coffee">
            <div className="single-coffee__item">
                <img src= {image} alt={title} className="single-coffee__item__img"/>
            </div>
            <div className="single-coffee__item">
                <div className="single-coffee__item__title">About it</div>
                <div className="header__seeds">
                    <div className="header__seeds__divider"></div>
                    <img src= {seeds} alt="seeds" className="header__seeds__img"/>
                    <div className="header__seeds__divider"></div>
                </div> 
                <div className="single-coffee__item__text">
                    <div className="single-coffee__item__text__title"><span className = "bold">{title}</span> </div>
                    <div className="single-coffee__item__text__descr"><span className = "bold">Description: </span>{description}</div>
                    <div className="single-coffee__item__text__price"><span className = "single-coffee__item__text__price single-coffee__item__text__price_span">Price:</span>  16.99$</div>
                </div>
            </div>
        </div>
    )
}

export default SingleCoffeeView;