import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import CountryDetails from '../components/CountryDetails';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/pages/countryDetails.css';

const CountryDetailsPage = () => {
	let history = useHistory();

	const selectedCountry = useSelector((state) => state.selectedCountry);

	console.log(selectedCountry && selectedCountry);

	const handleRedirect = () => {
		return history.push('/');
	};

	return (
		<div id="country-details" className="country-details-page container-fluid">
			<div className="country-details-content">
				<div className="return-home-section row">
					<div className="return-home">
						<button
							id="return-button"
							name="return-button"
							type="button"
							className="return-button"
							onClick={handleRedirect}
						>
							<span className="return-icon">
								<FontAwesomeIcon icon={faLongArrowAltLeft} />
							</span>
							Back
						</button>
					</div>
				</div>
				{selectedCountry && (
					<CountryDetails
						id={selectedCountry.alpha3Code}
						flag={selectedCountry.flag}
						name={selectedCountry.name}
						nativeName={selectedCountry.nativeName}
						population={selectedCountry.population}
						region={selectedCountry.region}
						subRegion={selectedCountry.subRegion}
						capital={selectedCountry.capital}
						domain={selectedCountry.topLevelDomain}
						currencies={selectedCountry.currencies}
						languages={selectedCountry.languages}
						borders={selectedCountry.borders}
					/>
				)}
			</div>
		</div>
	);
};

export default CountryDetailsPage;
