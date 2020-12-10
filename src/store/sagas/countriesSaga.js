import * as actions from '../actions/index';
import * as api from '../../apis/api';
import { put, call } from 'redux-saga/effects';

export function* fetchCountriesSaga(action) {
	try {
		yield put(actions.loadingCountries());
		const response = yield call(api.fetchCountries);
		yield put(actions.fetchCountriesSuccess(response.data));
	} catch (err) {
		yield put(actions.fetchCountriesFail());
	}
}

export function* searchCountriesSaga(action) {
	try {
		yield put(actions.loadingCountries());
		let searchTerm = action.searchTerm;
		let response;

		if (searchTerm) {
			response = yield call(api.searchCountries, searchTerm);
		} else {
			response = yield call(api.fetchCountries);
		}

		yield put(
			actions.searchCountriesSuccess({
				searchTerm: searchTerm,
				responseData: response.data,
			}),
		);
	} catch (err) {
		yield put(actions.searchCountriesFail());
	}
}

export function* fetchCountrySaga(action) {
	try {
		yield put(actions.loadingCountries());
		let response;
		if (action.alpha3Code) {
			response = yield call(api.fetchCountry, action.alpha3Code);
		}
		yield put(actions.fetchCountrySuccess(response.data));
	} catch (err) {
		yield put(actions.fetchCountryFail());
	}
}

export function* fetchBorderCountriesSaga(action) {}
