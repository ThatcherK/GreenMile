import React from 'react';
import { Switch } from 'react-router-dom';
import SupplierList from '../suppliers/SupplierList';
import Invoice from '../Invoice';
import PrivateRoute from './PrivateRoute';
import HubManagerList from '../hubManagers/HubManagerList';
import LoadersList from '../loaders/LoadersList';
import Dashboard from '../admin/Dashboard';

export default function AdminNav() {
	return (
		<Switch>
			<PrivateRoute exact path="/" component={Dashboard} />
			<PrivateRoute exact path="/suppliers" component={SupplierList} />
			<PrivateRoute exact path="/hub-managers" component={HubManagerList} />
			<PrivateRoute exact path="/invoices" component={Invoice} />
			<PrivateRoute exact path="/loaders" component={LoadersList} />
		</Switch>
	);
}
