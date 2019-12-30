import useLocalStorage from '../hooks/useLocalStorage'

const [load, save] = useLocalStorage()

export default (state = load('favs') || [], { type, payload }) => {
	switch (type) {
		case 'ADD_FAVOURITE':
			const favourites = [...state, payload]
			save('favs', favourites)
			return favourites
		case 'REMOVE_FAVOURITE':
			const favouritesWithoutRemoved = state.filter(f => f.imdbID !== payload)
			save('favs', favouritesWithoutRemoved)
			return favouritesWithoutRemoved
		default:
			return state
	}
}
