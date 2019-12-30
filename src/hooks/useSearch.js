import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setMoviesAction } from '../actions/movies'
import { fetchMovies } from '../Api'

import {
	setTotalPagesAction,
	setSearchTextAction,
	setActivePageAction,
} from '../actions/search'

import Pagination from '../components/Pagination'

const useSearch = () => {
	const { activePage, searchText, totalPages } = useSelector(
		state => state.search
	)
	const dispatch = useDispatch()

	const setActivePage = page => dispatch(setActivePageAction(page))
	const setSearchText = text => dispatch(setSearchTextAction(text))

	useEffect(() => {
		if (searchText) {
			dispatch({
				type: 'MOVIE_SEARCH_REQUESTED',
				payload: {
					searchText,
					page: activePage,
				},
			})
		}
	}, [activePage, searchText])

	return [
		setSearchText,
		<Pagination
			activePage={activePage}
			totalPages={totalPages}
			setPage={setActivePage}
		/>,
	]
}

export default useSearch
