import * as actionTypes from './actionTypes';

export const loadingCountries = () => ({
	type: actionTypes.LOADING_COUNTRIES,
});

export const fetchCountries = () => ({
	type: actionTypes.FETCH_COUNTRIES,
});

export const fetchCountriesFail = () => ({
	type: actionTypes.FETCH_COUNTRIES_FAIL,
});

export const fetchCountriesSuccess = (countries) => ({
	type: actionTypes.FETCH_COUNTRIES_SUCCESS,
	countries,
});

export const filterRegion = (region) => ({
	type: actionTypes.FILTER_REGION,
	region,
});

export const setSearchTerm = (searchTerm) => ({
	type: actionTypes.SET_SEARCH_TERM,
	searchTerm,
});

export const searchCountries = (searchTerm) => ({
	type: actionTypes.SEARCH_COUNTRIES,
	searchTerm,
});

export const searchCountriesFail = () => ({
	type: actionTypes.SEARCH_COUNTRIES_FAIL,
});

export const searchCountriesSuccess = (countries) => ({
	type: actionTypes.SEARCH_COUNTRIES_SUCCESS,
	countries,
});

export const selectCountry = (alpha3Code) => ({
	type: actionTypes.SELECT_COUNTRY,
	alpha3Code,
});

export const fetchCountry = (alpha3Code) => ({
	type: actionTypes.FETCH_COUNTRY,
	alpha3Code,
});

export const fetchCountryFail = () => ({
	type: actionTypes.FETCH_COUNTRY_FAIL,
});

export const fetchCountrySuccess = (country) => ({
	type: actionTypes.FETCH_COUNTRY_SUCCESS,
	country,
});

export const displayCountry = (alpha3Code) => ({
	type: actionTypes.DISPLAY_COUNTRY,
	alpha3Code,
});

export const selectCountries = (borders) => ({
	type: actionTypes.SELECT_COUNTRIES,
	countryCodes: [...borders],
});

export const fetchBorderCountries = (countryCodes) => ({
	type: actionTypes.FETCH_BORDER_COUNTRIES,
	countryCodes,
});

export const fetchBorderCountriesFail = () => ({
	type: actionTypes.FETCH_BORDER_COUNTRIES_FAIL,
});

export const fetchBorderCountriesSuccess = (countries) => ({
	type: actionTypes.FETCH_BORDER_COUNTRIES,
	countries,
});
