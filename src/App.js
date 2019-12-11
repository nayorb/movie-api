import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import MovieSearchPage from './pages/MovieSearchPage'
import FavouriteMoviesPage from './pages/FavouriteMoviesPage'
import MovieDetailPage from './pages/MovieDetailPage'

function App() {
	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route path='/fav' component={FavouriteMoviesPage} />
					<Route path='/detail/:id' component={MovieDetailPage} />
					<Route path='/' component={MovieSearchPage} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
