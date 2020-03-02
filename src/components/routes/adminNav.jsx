import React from 'react';
import { Switch} from 'react-router-dom';
import Supplier from '../Supplier';
import UserForm from '../UserForm';
import Invoice from '../Invoice';
import Packages from '../Packages';
import PrivateRoute from './PrivateRoute'
export default function AdminNav() {
	return (
		<Switch>
			<PrivateRoute path="/suppliers" component={Supplier} />
			<PrivateRoute path="/create-user" component={UserForm} />
			<PrivateRoute path="/invoices" component={Invoice} />
			<PrivateRoute path="/packages" component={Packages} />
		</Switch>
	);
}
