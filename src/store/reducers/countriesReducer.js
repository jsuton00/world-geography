import { REGIONS } from '../../constants/REGIONS';
import { updateObject } from '../../utils/reduxUtils';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
	countries: [],
	filteredCountries: [],
	region: REGIONS[0],
	searchTerm: '',
	alpha3Code: '',
	country: '',
	selectedCountry: '',
	displayedCountry: '',
	countryCodes: [],
	borderCountries: [],
	loadingCountries: false,
	errorFetchCountries: false,
	errorSearchCountries: false,
	errorFetchCountry: false,
};

const setLoadingCountries = (state, action) => {
	return updateObject(state, {
		loadingCountries: true,
	});
};

/** FETCH COUNTRIES START */
const fetchCountriesFail = (state, action) => {
	return updateObject(state, {
		loadingCountries: false,
		errorFetchCountries: true,
	});
};

const fetchCountriesSuccess = (state, action) => {
	return updateObject(state, {
		loadingCountries: false,
		errorFetchCountries: false,
		countries: action.countries,
		filteredCountries: action.countries,
	});
};
/** FETCH COUNTRIES END */

/** FILTER REGIONS START */
const filterRegion = (state, action) => {
	let filteredRegion = action.region;
	let regionCountries;

	if (filteredRegion === REGIONS[0]) {
		if (state.searchTerm) {
			regionCountries = state.countries.filter((c) => {
				return c.name.toLowerCase().includes(state.searchTerm);
			});

			return updateObject(state, {
				filteredCountries: regionCountries,
				region: filteredRegion,
				loadingCountries: false,
			});
		}
		return updateObject(state, {
			filteredCountries: [...state.countries],
			region: filteredRegion,
			loadingCountries: false,
		});
	}

	if (state.searchTerm) {
		regionCountries = state.countries.filter((c) => {
			return (
				c.region.toLowerCase() === filteredRegion &&
				c.name.toLowerCase().includes(state.searchTerm)
			);
		});
	} else {
		regionCountries = state.countries.filter((c) => {
			return c.region.toLowerCase() === filteredRegion;
		});
	}

	return updateObject(state, {
		filteredCountries: regionCountries,
		region: filteredRegion,
		loadingCountries: false,
	});
};

/** SEARCH COUNTRIES START */
const setSearchTerm = (state, action) => {
	return updateObject(state, {
		searchTerm: action.searchTerm,
		loadingCountries: false,
		errorSearchCountries: false,
	});
};

const searchCountriesFail = (state, action) => {
	return updateObject(state, {
		loadingCountries: false,
		errorSearchCountries: true,
	});
};

const searchCountriesSuccess = (state, action) => {
	const searchTerm = action.countries.searchTerm.toLowerCase();
	let searchResults = [];
	let regionName = state.region;

	if (!searchTerm) {
		if (regionName === REGIONS[0]) {
			searchResults = [...state.countries];
		} else if (action.countries.responseData.length === 0) {
			searchResults = [];
		} else {
			searchResults = action.countries.responseData.filter((c) => {
				return c.region.toLowerCase() === regionName;
			});
		}
	} else {
		if (regionName === REGIONS[0]) {
			searchResults = state.countries.filter((c) => {
				return c.name.toLowerCase().includes(searchTerm);
			});
		} else if (action.countries.responseData.length === 0) {
			searchResults = [];
		} else {
			searchResults = action.countries.responseData.filter((c) => {
				return (
					c.name.toLowerCase().includes(searchTerm) &&
					c.region.toLowerCase() === regionName
				);
			});
		}
	}

	return updateObject(state, {
		filteredCountries: searchResults,
		loadingCountries: false,
		errorSearchCountries: false,
	});
};

const selectCountry = (state, action) => {
	if (action.alpha3Code) {
		return updateObject(state, {
			alpha3Code: action.alpha3Code.toLowerCase(),
			loadingCountries: false,
			errorFetchCountry: false,
		});
	}
};

const fetchCountryFail = (state, action) => {
	return updateObject(state, {
		loadingCountries: false,
		errorFetchCountry: true,
	});
};

const fetchCountrySuccess = (state, action) => {
	return updateObject(state, {
		country: action.country,
		selectedCountry: action.country,
		loadingCountries: false,
		errorFetchCountry: false,
	});
};

const displayCountry = (state, action) => {
	let alpha3Code = [...action.alpha3Code];
	let borderCountries;

	if (alpha3Code) {
		borderCountries = state.countries.filter((c) => {
			return c.alpha3Code === alpha3Code.map((a) => a);
		});
	}

	return updateObject(state, {
		borderCountries: borderCountries,
		alpha3Code: alpha3Code,
		loadingCountries: false,
	});
};

const selectCountries = (state, action) => {
	let alpha3Codes = [...action.countryCodes];
	let countryCodes;
	let borderCountries;

	if (alpha3Codes.length > 0) {
		countryCodes = alpha3Codes.map((c) => c);
	}

	if (countryCodes.length > 0) {
		borderCountries = state.countries.filter((c) => {
			return c.alpha3Code === [countryCodes];
		});
	}

	return updateObject(state, {
		countryCodes: countryCodes,
		borderCountries: borderCountries,
		loadingCountries: false,
		errorFetchCountries: false,
	});
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_COUNTRIES_FAIL:
			return fetchCountriesFail(state, action);
		case actionTypes.FETCH_COUNTRIES_SUCCESS:
			return fetchCountriesSuccess(state, action);
		case actionTypes.FILTER_REGION:
			return filterRegion(state, action);
		case actionTypes.SET_SEARCH_TERM:
			return setSearchTerm(state, action);
		case actionTypes.SEARCH_COUNTRIES_FAIL:
			return searchCountriesFail(state, action);
		case actionTypes.SEARCH_COUNTRIES_SUCCESS:
			return searchCountriesSuccess(state, action);
		case actionTypes.SELECT_COUNTRY:
			return selectCountry(state, action);
		case actionTypes.FETCH_COUNTRY_FAIL:
			return fetchCountryFail(state, action);
		case actionTypes.FETCH_COUNTRY_SUCCESS:
			return fetchCountrySuccess(state, action);
		case actionTypes.DISPLAY_COUNTRY:
			return displayCountry(state, action);
		case actionTypes.SELECT_COUNTRIES:
			return selectCountries(state, action);
		case actionTypes.LOADING_COUNTRIES:
			return setLoadingCountries(state, action);
		default:
			return state;
	}
};

export default reducer;
