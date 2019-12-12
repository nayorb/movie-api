const reducer = (state, action) => {
	switch (action.type) {
		case 'data-arrived':
			return {
				...state,
				totalPages: Math.ceil(parseInt(action.data.totalResults) / 10),
				movies: action.data.Search,
			}
		case 'search':
			return {
				...state,
				searchText: action.text,
				activePage: 1,
			}
		case 'change-page':
			return {
				...state,
				activePage: action.page,
			}
		case 'next-page':
			return {
				...state,
				activePage: state.activePage + 1,
			}
		case 'prev-page':
			return {
				...state,
				activePage: state.activePage - 1,
			}
		default:
			return state
	}
}

export default reducer
