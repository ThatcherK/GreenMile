import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import PrivateRoute from './PrivateRoute';
import Layout from '../Layout';

export default function Router() {
	return (
		<Switch>
			<Route exact path="/login" component={WelcomePage} />
			<PrivateRoute path="/" component={Layout} />
		</Switch>
	);
}
