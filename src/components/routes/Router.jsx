import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import Admin from '../admin/Admin';
import Supplier from '../suppliers/Supplier';
import HubManager from '../hubManagers/HubManager';
import Loader from '../loaders/Loader';
import PrivateRoute from './PrivateRoute';

export default function Router() {
	return (
		<Switch>
			<Route exact path="/login" component={WelcomePage} />
			<PrivateRoute path="/supplier" component={Supplier} />
			<PrivateRoute path="/hubManager" component={HubManager} />
			<PrivateRoute path="/loader" component={Loader} />
			<PrivateRoute path="/" component={Admin} />
		</Switch>
	);
}
