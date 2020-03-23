import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Switch } from 'react-router-dom';
import HubManDashboard from '../hubManagers/HubManDashboard';
import Packages from '../Packages';
import Invoice from '../Invoice';

const HubManagerNav =()=>{
    return (
        <Switch>
            <PrivateRoute exact path="/" component={HubManDashboard}/>
			<PrivateRoute exact path="/packages" component={Packages} />
			<PrivateRoute exact path="/invoice" component={Invoice} />
		
		</Switch>
    )
}

export default HubManagerNav;