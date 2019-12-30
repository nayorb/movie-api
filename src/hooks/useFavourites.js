import { useSelector, useDispatch } from 'react-redux'
import {
	removeFavouriteAction,
	addFavouriteAction,
} from '../actions/favourites'

const useFavourites = () => {
	const favourites = useSelector(state => state.favourites)
	const dispatch = useDispatch()

	const removeFavourite = imdbID => dispatch(removeFavouriteAction(imdbID))
	const addFavourite = fav => dispatch(addFavouriteAction(fav))
	const isInFavourites = imdbID => favourites.some(f => f.imdbID === imdbID)

	return { addFavourite, removeFavourite, isInFavourites, favourites }
}

export default useFavourites
