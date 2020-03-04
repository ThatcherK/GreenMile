import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import Admin from '../Admin';
import PrivateRoute from './PrivateRoute';


export default function Router() {
	return (
		<Switch>
			<Route exact path="/login" component={WelcomePage} />
			
			<PrivateRoute path="/" component={Admin} />
		</Switch>
	);
}
