import { useDispatch} from "react-redux";
import { filterChanged } from "../filters/filtersSlice";

const FilterButton = ({filterName}) => {
    const dispatch = useDispatch();
    
    const changeFitler = () => {
        dispatch(filterChanged(filterName));
    }

    return <button className="products__filters__item__button"
        onClick={changeFitler}>{filterName}</button>
}

export default FilterButton;