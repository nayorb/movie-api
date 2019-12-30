export const addFavouriteAction = movie => ({
	type: 'ADD_FAVOURITE',
	payload: movie,
})

export const removeFavouriteAction = id => ({
	type: 'REMOVE_FAVOURITE',
	payload: id,
})
