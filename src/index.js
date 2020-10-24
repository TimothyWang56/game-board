import React from 'react';
import ReactDOM from 'react-dom';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import LandingPage from './Pages/LandingPage/LandingPage';
import LobbyPage from './Pages/LobbyPage/LobbyPage';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path='/' exact>
					<LandingPage/>
				</Route>
				<Route path='/lobby' exact>
					<LobbyPage/>
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
