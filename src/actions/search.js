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
