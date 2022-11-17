import { useDispatch } from "react-redux";
import { searchTitleChanged } from "../filters/filtersSlice";

const FilterSearch = () => {
    const dispatch = useDispatch();

    const setTitle = (e) => {
        dispatch(searchTitleChanged(e.target.value));
    }

    return (
        <div className="products__filters__item">
            <div className="products__filters__item__text">Looking for</div>
            <input type="text" 
                className="products__filters__item__input" 
                placeholder="start typing here..."
                onChange={setTitle}/>
        </div>
    )
}

export default FilterSearch;
