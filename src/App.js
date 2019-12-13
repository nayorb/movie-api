import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './store'

import Nav from './components/Nav'
import MovieSearchPage from './pages/MovieSearchPage'
import FavouriteMoviesPage from './pages/FavouriteMoviesPage'
import MovieDetailPage from './pages/MovieDetailPage'

import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
	return (
		<Provider store={store}>
			<CssBaseline />
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
		</Provider>
	)
}

export default App
