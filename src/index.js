import React from 'react';
import ReactDOM from 'react-dom';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";


ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path='/' exact>
					<div>Landing Page</div>
				</Route>
				<Route path='/games' exact>
					<div>Games Page</div>
				</Route>
				<Route path='/members' exact>
					<div>Members Page</div>
				</Route>
				<Route path='/stats' exact>
					<div>Stats Page</div>
				</Route>
				<Route path='/discussion' exact>
					<div>Discussion Page</div>
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
