import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchMovieDetails, fetchMovies } from '../Api'

function* getMovieDetails(action) {
	try {
		const data = yield call(fetchMovieDetails, {
			id: action.payload.id,
		})
		yield put({ type: 'SET_SELECTED_MOVIE', payload: data })
	} catch (e) {
		yield put({ type: 'MOVIE_FETCH_FAILED', message: e.message })
	}
}

export function* watchMovieDetailRequest() {
	yield takeEvery('MOVIE_FETCH_REQUESTED', getMovieDetails)
}

function* getMovies(action) {
	try {
		const data = yield call(fetchMovies, {
			searchText: action.payload.searchText,
			page: action.payload.page,
		})
		yield put({ type: 'SET_MOVIES', payload: data.Search })
		yield put({
			type: 'SET_TOTAL_PAGES',
			payload: Math.ceil(parseInt(data.totalResults) / 10),
		})
	} catch (e) {
		yield put({ type: 'MOVIE_SEARCH_FAILED', message: e.message })
	}
}

export function* searchRequest() {
	yield takeEvery('MOVIE_SEARCH_REQUESTED', getMovies)
}
