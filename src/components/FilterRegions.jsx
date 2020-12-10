import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';
import { REGIONS } from '../constants/REGIONS';
import '../styles/components/filterRegions.css';

const FilterRegions = () => {
	const filterRegionsRef = useRef();
	const dispatch = useDispatch();
	const filterRegion = useSelector((state) => state.region);

	const handleChange = (e) => {
		return dispatch(actions.filterRegion(e.target.value));
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (filterRegion === filterRegionsRef.current.value) {
				return dispatch(actions.filterRegion(filterRegion));
			}
		}, 500);
		return () => {
			clearTimeout(timer);
		};
	}, [dispatch, filterRegion]);

	return (
		<div id="filter-regions-container" className="filter-regions-container">
			<select
				ref={filterRegionsRef}
				id="filter-regions"
				className="filter-regions-select"
				onChange={handleChange}
				value={filterRegion}
			>
				{REGIONS.length > 0 &&
					REGIONS.map((region) => {
						return (
							<option
								key={region}
								value={region}
								className="filter-regions-option"
							>
								{region === 'americas' ? 'america' : `${region}`}
							</option>
						);
					})}
			</select>
		</div>
	);
};

export default FilterRegions;
