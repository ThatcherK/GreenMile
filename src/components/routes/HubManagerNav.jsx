
import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Switch } from 'react-router-dom';
import HubManDashboard from '../hubManagers/HubManDashboard';
import Invoice from '../Invoice';
import HubPackages from '../hubManagers/HubPackages';

const HubManagerNav =()=>{
    return (
        <Switch>
            <PrivateRoute exact path="/" component={HubManDashboard}/>
			<PrivateRoute exact path="/packages" component={HubPackages} />
			<PrivateRoute exact path="/invoice" component={Invoice} />
		
		</Switch>
    )
}

export default HubManagerNav;