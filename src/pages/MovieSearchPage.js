import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useSearch from '../hooks/useSearch'
import useFavourites from '../hooks/useFavourites'
import COLORS from '../constants/colors'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'

import { Link } from 'react-router-dom'

export default function MovieSearchPage() {
	const [searchText, setSearchText] = useState('')
	const movies = useSelector(state => state.movies)

	const { isInFavourites } = useFavourites()

	const [search, Pagination] = useSearch()

	const searchNotValid = () => searchText.length > 0 && searchText.length < 3

	return (
		<div style={{ padding: 20 }}>
			<h1>MovieSearch</h1>
			<div style={{ display: 'flex' }}>
				<form
					style={{ flex: 1 }}
					noValidate
					autoComplete='off'
					onSubmit={e => {
						e.preventDefault()
						if (searchText.length >= 3) {
							search(searchText)
						}
					}}
				>
					<TextField
						error={searchNotValid()}
						style={{ width: '-webkit-fill-available' }}
						label={searchNotValid() ? 'At least 3 characters.' : 'Search'}
						variant='outlined'
						onChange={e => setSearchText(e.target.value)}
						value={searchText}
					/>
				</form>
				<Button
					color='primary'
					variant='contained'
					icon='search'
					disabled={searchText.length < 3}
					onClick={() => search(searchText)}
					style={{ marginLeft: 20 }}
				>
					Search
				</Button>
			</div>
			<List>
				{movies &&
					movies.map((m, i) => (
						<ListItem key={i}>
							<Link to={`/detail/${m.imdbID}`} className='list-item'>
								<ListItemText primary={m.Title} />
							</Link>
							<ListItemSecondaryAction>
								{isInFavourites(m.imdbID) ? (
									<StarIcon style={{ color: COLORS.YELLOW }} />
								) : (
									<StarBorderIcon />
								)}
							</ListItemSecondaryAction>
						</ListItem>
					))}
			</List>
			{Pagination}
		</div>
	)
}
