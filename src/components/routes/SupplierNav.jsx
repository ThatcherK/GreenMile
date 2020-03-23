
import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Switch } from 'react-router-dom';
import Packages from '../suppliers/Packages';
import SupplierInvoice from '../suppliers/SupplierInvoice';
import SupplierDashboard from '../suppliers/SupplierDashboard';


export default function SupplierNav() {
	return (
		<Switch>
            <PrivateRoute exact path="/" component={SupplierDashboard}/>
			<PrivateRoute exact path="/packages" component={Packages} />
			<PrivateRoute exact path="/invoice" component={SupplierInvoice} />
		
		</Switch>
	);

}