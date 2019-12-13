import React from 'react'
import { Link } from 'react-router-dom'

import COLORS from '../constants/colors'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import useFavourites from '../hooks/useFavourites'

export default function FavouriteMoviesPage() {
	const { removeFavourite, favourites } = useFavourites()

	return (
		<div style={{ padding: 20 }}>
			<h1>FavouriteMovies</h1>
			<List>
				{favourites &&
					favourites.map((m, i) => (
						<ListItem key={i}>
							<Link to={`/detail/${m.imdbID}`} className='list-item'>
								<ListItemText primary={m.title} />
							</Link>
							<ListItemSecondaryAction>
								<IconButton
									edge='end'
									aria-label='delete'
									onClick={() => removeFavourite(m.imdbID)}
								>
									<DeleteIcon style={{ color: COLORS.RED }} />
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
					))}
			</List>
		</div>
	)
}
