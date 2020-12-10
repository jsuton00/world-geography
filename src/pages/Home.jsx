import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';
import FilterRegions from '../components/FilterRegions';
import SearchBar from '../components/SearchBar';
import '../styles/pages/home.css';
import CountryCard from '../components/CountryCard';
import { useHistory } from 'react-router';

export default function Home() {
	let history = useHistory();
	const dispatch = useDispatch();
	const countries = useSelector((state) => state.filteredCountries);
	const selectedCountry = useSelector((state) => state.selectedCountry);
	const alpha3Code = useSelector((state) => state.alpha3Code);

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(actions.fetchCountries());
		});

		const timerFetchCountry = setTimeout(() => {
			if (alpha3Code) {
				dispatch(actions.fetchCountry(alpha3Code));
			}
		});

		return () => {
			clearTimeout(timer);
			clearTimeout(timerFetchCountry);
		};
	}, [alpha3Code, dispatch]);

	const goToDetails = () => {
		if (alpha3Code) {
			if (selectedCountry) {
				return history.push({
					pathname: `/country/:${alpha3Code}`,
					countryCode: alpha3Code,
					country: selectedCountry,
				});
			}
		}
	};

	return (
		<div id="home" className="home container-fluid">
			<div id="search-controls-section" className="search-controls-section row">
				<SearchBar />
				<FilterRegions />
			</div>
			<div id="country-cards-section" className="country-cards-section row">
				{countries.length > 0 &&
					countries.map((country, index) => {
						return (
							<CountryCard
								key={index}
								countryId={country.alpha3Code}
								country={country}
								selectCountry={() =>
									dispatch(actions.selectCountry(country.alpha3Code))
								}
								visitCountry={() => goToDetails(country.alpha3Code)}
								fetchCountry={() =>
									dispatch(actions.fetchCountry(country.alpha3Code))
								}
							/>
						);
					})}
			</div>
		</div>
	);
}
