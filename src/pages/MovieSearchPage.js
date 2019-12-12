import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import useSearch from '../hooks/useSearch'

import { List, Input } from 'antd'

import { Link } from 'react-router-dom'

const { Search } = Input

export default function MovieSearchPage() {
	const [searchText, setSearchText] = useState('')
	const movies = useSelector(state => state.movies)

	const [search, Pagination] = useSearch()

	return (
		<div style={{ padding: 20 }}>
			<h1>MovieSearch</h1>
			<Search
				placeholder='input search text'
				onSearch={value => {
					search(value)
				}}
				enterButton='Search'
				value={searchText}
				onChange={e => setSearchText(e.target.value)}
				// disabled={searchText.length < 3}
			/>
			{movies &&
				movies.map((m, i) => (
					<List>
						<Link to={`/detail/${m.imdbID}`} key={i}>
							<List.Item>
								<div>{m.Title}</div>
							</List.Item>
						</Link>
					</List>
				))}
			{Pagination}
		</div>
	)
}
