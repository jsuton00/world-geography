import { all, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
	fetchCountriesSaga,
	fetchCountrySaga,
	searchCountriesSaga,
} from './countriesSaga';

export function* watchCountries() {
	yield all([
		takeEvery(actionTypes.FETCH_COUNTRIES, fetchCountriesSaga),
		takeEvery(actionTypes.SEARCH_COUNTRIES, searchCountriesSaga),
		takeEvery(actionTypes.FETCH_COUNTRY, fetchCountrySaga),
	]);
}
