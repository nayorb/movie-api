import React, { useEffect, useState } from 'react'

import useFavourites from '../hooks/useFavourites'

export default function MovieDetailPage({ match, history }) {
	const [movie, setMovie] = useState(null)
	const { addFavourite, isInFavourites } = useFavourites()

	useEffect(() => {
		fetch(`http://www.omdbapi.com/?apikey=bee67ab4&i=${match.params.id}`)
			.then(success => success.json())
			.then(data => {
				setMovie(data)
			})
	}, [])

	return (
		<div style={{ padding: 20 }}>
			<button onClick={history.goBack}>Back</button>
			{movie ? (
				<>
					<h1>{movie.Title}</h1>
					<div>{JSON.stringify(movie)}</div>
					<button
						onClick={() =>
							addFavourite({
								imdbID: movie.imdbID,
								title: movie.Title,
							})
						}
						disabled={isInFavourites(movie.imdbID)}
					>
						Favourite
					</button>
				</>
			) : null}
		</div>
	)
}
