import React from 'react';
import '../styles/components/header.css';

export default function Header() {
	return (
		<header id="header" className="header container-fluid">
			<nav id="nav" role="navigation" className="app-nav row">
				<h1 className="app-title">World Geography</h1>
			</nav>
		</header>
	);
}
