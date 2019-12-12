import React from 'react'
import { Link } from 'react-router-dom'

import useFavourites from '../hooks/useFavourites'

export default function FavouriteMoviesPage() {
	const { removeFavourite, favourites } = useFavourites()

	return (
		<div style={{ padding: 20 }}>
			<h1>FavouriteMovies</h1>
			{favourites.map(fav => (
				<>
					<Link to={`/detail/${fav.imdbID}`}>
						<div key={fav.imdbID}>{JSON.stringify(fav)}</div>
					</Link>
					<button onClick={() => removeFavourite(fav.imdbID)}>Remove</button>
				</>
			))}
		</div>
	)
}
