import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/components/countryCard.css';
import { formatPopulation } from '../utils/formatText';

const CountryCard = (props) => {
	const {
		countryId,
		country,
		selectCountry,
		visitCountry,
		fetchCountry,
	} = props;

	const countryCardRef = useRef();
	const dispatch = useDispatch();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (countryId === countryCardRef.current.value) {
				selectCountry(countryId);
				visitCountry(countryId);
			}
		});

		return () => {
			clearTimeout(timer);
		};
	}, [countryId, dispatch, selectCountry, visitCountry]);

	const handleClick = (e) => {
		selectCountry(e.target.value);
		visitCountry(e.target.value);
		fetchCountry(e.target.value);
	};

	return (
		<div
			ref={countryCardRef}
			className="country-card card"
			value={countryId}
			onClick={handleClick}
		>
			<img
				src={country.flag}
				alt={`${country.name} flag`}
				className="country-flag card-img-top"
			/>
			<div className="country-card-body card-body">
				<h5 className="country-card-title country-name card-title">
					{country.name}
				</h5>
				<p className="country-card-text country-population card-text">
					<span className="country-card-info">Population:</span>
					{formatPopulation(country.population)}
				</p>
				<p className="country-card-text country-region card-text">
					<span className="country-card-info">Region:</span>
					{country.region}
				</p>
				<p className="country-card-text country-capital card-text">
					<span className="country-card-info">Capital:</span>
					{country.capital}
				</p>
			</div>
		</div>
	);
};

export default CountryCard;
