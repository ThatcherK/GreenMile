import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FirstPage from '../FirstPage';
import Admin from '../Admin';
import PrivateRoute from './PrivateRoute';


export default function Router() {
	return (
		<Switch>
			<Route exact path="/login" component={FirstPage} />
			<PrivateRoute path="/" component={Admin} />
		</Switch>
	);
}
