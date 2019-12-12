import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	setTotalPagesAction,
	setMoviesAction,
	setSearchTextAction,
	setActivePageAction,
} from '../store'

import useFetch from './useFetch'
import API from '../constants/api'
import Pagination from '../components/Pagination'

const useSearch = () => {
	const { activePage, searchText, totalPages } = useSelector(state => state)
	const dispatch = useDispatch()

	const setTotalPages = total => dispatch(setTotalPagesAction(total))
	const setActivePage = page => dispatch(setActivePageAction(page))
	const setSearchText = text => dispatch(setSearchTextAction(text))
	const setMovies = movies => dispatch(setMoviesAction(movies))

	const fetchData = useFetch()

	const getData = () => {
		fetchData('http://www.omdbapi.com/', {
			apikey: API.API_KEY,
			s: searchText,
			page: activePage,
		}).then(data => {
			setMovies(data.Search)
			setTotalPages(Math.ceil(parseInt(data.totalResults) / 10))
		})
	}

	useEffect(() => {
		if (searchText) {
			getData()
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
