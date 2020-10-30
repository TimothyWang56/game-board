import React from 'react';
import ReactDOM from 'react-dom';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './reducers/store';

import LandingPage from './Pages/LandingPage/LandingPage';
import LobbyPage from './Pages/LobbyPage/LobbyPage';
import LeaguesPage from './Pages/LeaguesPage/LeaguesPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';

ReactDOM.render(
	<Provider store={store}> 
		<React.StrictMode>
			<Router>
				<Switch>
					<Route path='/' exact component={LandingPage}/>
					<Route path='/lobby' exact component={LobbyPage}/>
					<Route path='/leagues' exact component={LeaguesPage}/>
					<Route path='/login' exact component={LoginPage}/>
					<Route path='/register' exact component={RegistrationPage}/>

				</Switch>
			</Router>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
