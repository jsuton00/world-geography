import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';
import '../styles/components/searchBar.css';

const SearchBar = () => {
	const searchInputRef = useRef();
	const dispatch = useDispatch();
	const searchTerm = useSelector((state) => state.searchTerm);

	const handleChange = (e) => {
		return dispatch(actions.setSearchTerm(e.target.value));
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchTerm === searchInputRef.current.value) {
				if (searchTerm.length > 0) {
					dispatch(actions.searchCountries(searchTerm));
				} else {
					dispatch(actions.fetchCountries());
				}
			}
		}, 500);
		return () => {
			clearTimeout(timer);
		};
	}, [dispatch, searchTerm]);

	return (
		<div id="search-bar-container" className="search-bar-container">
			<label htmlFor="search-countries" className="search-icon">
				<FontAwesomeIcon icon={faSearch} />
			</label>
			<input
				ref={searchInputRef}
				id="search-countries"
				name="search-countries"
				type="text"
				placeholder="Search for a country"
				className="search-countries"
				onChange={handleChange}
				value={searchTerm}
			/>
		</div>
	);
};

export default SearchBar;
