import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CountryDetailsPage from './pages/CountryDetailsPage';
import './styles/app.css';

function App() {
	return (
		<div id="app" className="app">
			<Header />
			<main id="main" className="main container-fluid">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/country/:id" component={CountryDetailsPage} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
