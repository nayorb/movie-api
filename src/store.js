import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all, fork } from 'redux-saga/effects'

import * as movieSagas from './sagas/movies'

import search from './reducers/search'
import favourites from './reducers/favourites'
import movies from './reducers/movies'

const sagaMiddleware = createSagaMiddleware()

function* rootSaga() {
	yield all([...Object.values(movieSagas).map(fork)])
}

export const store = createStore(
	combineReducers({
		search,
		favourites,
		movies,
	}),
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
