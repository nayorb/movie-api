import React, { useEffect } from 'react'

import useFavourites from '../hooks/useFavourites'

import COLORS from '../constants/colors'

import IconButton from '@material-ui/core/IconButton'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { useSelector, useDispatch } from 'react-redux'

const Bold = ({ children }) => (
	<span style={{ fontWeight: 'bold' }}>{children}</span>
)

export default function MovieDetailPage({ match, history }) {
	const movie = useSelector(state => state.movies.selectedMovie)
	const dispatch = useDispatch()
	const { addFavourite, isInFavourites, removeFavourite } = useFavourites()

	useEffect(() => {
		dispatch({
			type: 'MOVIE_FETCH_REQUESTED',
			payload: {
				id: match.params.id,
			},
		})
	}, [match.params.id])

	const starClicked = () => {
		if (movie && isInFavourites(movie.imdbID)) {
			removeFavourite(movie.imdbID)
		} else {
			addFavourite({ imdbID: movie.imdbID, title: movie.Title })
		}
	}

	return (
		<div style={{ padding: 20 }}>
			{movie ? (
				<Card>
					<CardHeader
						avatar={<Avatar aria-label='recipe'>{movie.imdbRating}</Avatar>}
						action={
							<IconButton aria-label='settings' onClick={starClicked}>
								{isInFavourites(movie.imdbID) ? (
									<StarIcon style={{ color: COLORS.YELLOW }} />
								) : (
									<StarBorderIcon />
								)}
							</IconButton>
						}
						title={movie.Title}
						subheader={movie.Released}
					/>
					<CardMedia
						image={movie.Poster}
						title={movie.Title}
						style={{
							height: 0,
							paddingTop: '50%',
						}}
					/>
					<CardContent>
						<Typography variant='body2' color='textSecondary' component='p'>
							{movie.Plot}
						</Typography>
					</CardContent>
					<CardContent>
						<div>
							<Typography>{movie.Genre}</Typography>
							<Typography>
								{movie.Country} / {movie.Year} / {movie.Runtime}
							</Typography>
						</div>
						<div>
							<Typography>
								<Bold>Director:</Bold> {movie.Director}
							</Typography>
							<Typography>
								<Bold>Writers:</Bold> {movie.Writer}
							</Typography>
							<Typography>
								<Bold>Actors:</Bold> {movie.Actors}
							</Typography>
							<Typography>
								<Bold>Earnings:</Bold> {movie.BoxOffice}
							</Typography>
						</div>
					</CardContent>
				</Card>
			) : null}
		</div>
	)
}
