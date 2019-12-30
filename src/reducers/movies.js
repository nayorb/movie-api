const initialState = {
	movies: [],
	selectedMovie: null,
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_MOVIES':
			return { ...state, movies: payload }
		case 'SET_SELECTED_MOVIE':
			return { ...state, selectedMovie: payload }
		default:
			return state
	}
}
