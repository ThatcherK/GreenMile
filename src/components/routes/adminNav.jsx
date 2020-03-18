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
			<PrivateRoute path="dashboard" component={Dashboard} />
			<PrivateRoute path="/suppliers" component={SupplierList} />
			<PrivateRoute path="/hub-managers" component={HubManagerList} />
			<PrivateRoute path="/invoices" component={Invoice} />
			<PrivateRoute path="/loaders" component={LoadersList} />
		</Switch>
	);
}
