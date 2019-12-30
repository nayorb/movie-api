const initialState = {
	searchText: '',
	activePage: 1,
	totalPages: 0,
}

export default (state = initialState, { type, payload }) => {
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
		default:
			return state
	}
}
