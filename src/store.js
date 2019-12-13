import { createStore } from 'redux'
import useLocalStorage from './hooks/useLocalStorage'

const [load, save] = useLocalStorage()

const initialState = {
	searchText: '',
	activePage: 1,
	totalPages: 0,
	movies: [],
	favourites: load('favs') || [],
}

const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'SET_SEARCH_TEXT':
			return {
				...state,
				searchText: payload,
				activePage: 1,
			}
		case 'SET_ACTIVE_PAGE':
			return {
				...state,
				activePage: payload,
			}
		case 'SET_TOTAL_PAGES':
			return {
				...state,
				totalPages: payload,
			}
		case 'SET_MOVIES':
			return {
				...state,
				movies: payload,
			}
		case 'ADD_FAVOURITE':
			const favs = [...state.favourites, payload]
			save('favs', favs)
			return {
				...state,
				favourites: favs,
			}
		case 'REMOVE_FAVOURITE':
			const favsWithoutRemoved = state.favourites.filter(
				f => f.imdbID !== payload
			)
			save('favs', favsWithoutRemoved)
			return {
				...state,
				favourites: favsWithoutRemoved,
			}
		default:
			return state
	}
}

export const setSearchTextAction = text => ({
	type: 'SET_SEARCH_TEXT',
	payload: text,
})

export const setActivePageAction = page => ({
	type: 'SET_ACTIVE_PAGE',
	payload: page,
})

export const setTotalPagesAction = total => ({
	type: 'SET_TOTAL_PAGES',
	payload: total,
})

export const setMoviesAction = movies => ({
	type: 'SET_MOVIES',
	payload: movies,
})

export const addFavouriteAction = movie => ({
	type: 'ADD_FAVOURITE',
	payload: movie,
})

export const removeFavouriteAction = id => ({
	type: 'REMOVE_FAVOURITE',
	payload: id,
})

export const store = createStore(reducer, initialState)
