import useFetch from './hooks/useFetch'
import API from './constants/api'

const fetchData = useFetch()

export const fetchMovies = ({ searchText, page }) => {
	return fetchData(API.MAIN_URL, {
		apikey: API.API_KEY,
		s: searchText,
		page: page,
	})
}

export const fetchMovieDetails = ({ id }) => {
	return fetchData(API.MAIN_URL, {
		apikey: API.API_KEY,
		i: id,
	})
}
