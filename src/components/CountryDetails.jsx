import React from 'react';
import { formatPopulation, mapListtoString } from '../utils/formatText';

export default function CountryDetails(props) {
	const {
		id,
		flag,
		name,
		nativeName,
		population,
		region,
		subRegion,
		capital,
		domain,
		currencies,
		languages,
		borders,
	} = props;

	return (
		<div id={id} className="country-details-row row">
			<div className="country-details-col flag-section">
				<div className="country-details-flag row">
					<img src={flag} alt={`Flag of ${name}`} className="country-flag" />
				</div>
			</div>
			<div className="country-details-col country-details">
				<h3 className="country-details-name row">{name}</h3>
				<div className="country-details-info row">
					<div className="country-details-basic-info">
						<p className="country-details-nativeName row">
							<span className="country-details-info-title">Native Name:</span>
							{nativeName}
						</p>
						<p className="country-details-population row">
							<span className="country-details-info-title">Population:</span>
							{`${formatPopulation(population)}`}
						</p>
						<p className="country-details-region row">
							<span className="country-details-info-title">Region:</span>
							{region}
						</p>
						<p className="country-details-subRegion row">
							<span className="country-details-info-title">Sub Region:</span>
							{subRegion ? subRegion : region}
						</p>
						<p className="country-details-capital row">
							<span className="country-details-info-title">Capital:</span>
							{capital}
						</p>
					</div>
					<div className="country-details-extra-info">
						<p className="country-details-domain row">
							<span className="country-details-info-title">
								Top-Level Domain:
							</span>
							{domain}
						</p>
						<p className="country-details-currencies row">
							<span className="country-details-info-title">Currencies:</span>
							{`${mapListtoString(currencies)}`}
						</p>
						<p className="country-details-languages row">
							<span className="country-details-info-title">Languages:</span>
							{`${mapListtoString(languages)}`}
						</p>
					</div>
				</div>
				<div className="country-details-border-section row">
					<div className="country-details-border-section-heading">
						<p className="country-details-info-title row">
							Bordering Countries:
						</p>
					</div>
					<div className="country-details-borders row">
						{borders.length > 0 &&
							borders.map((b, i) => {
								return (
									<div key={i} className="country-details-border">
										<button
											id="btn-border"
											name="btn-border"
											type="button"
											className="btn-border"
										>
											{b}
										</button>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
}
