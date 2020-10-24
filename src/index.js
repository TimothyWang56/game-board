import React from 'react';
import ReactDOM from 'react-dom';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

import LandingPage from './Pages/LandingPage/LandingPage';
import LobbyPage from './Pages/LobbyPage/LobbyPage';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}> 
		<React.StrictMode>
			<Router>
				<Switch>
					<Route path='/' exact component={LandingPage}/>
					<Route path='/lobby' exact component={LobbyPage}/>
					<Route path='/leagues' exact>
						Leagues
					</Route>
				</Switch>
			</Router>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
