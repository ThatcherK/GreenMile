import React from 'react';

import AdminNav from './routes/adminNav';
import Logo from './images/greenmile.png';
import SideBar from './SideBar'

export default function Admin() {
	
	return (
		<div className="dashboard">
			<SideBar/>
			<div className="otherPage">
				<div className="topBar">
					<img src={Logo} alt="greenmile-logo"/>
					<button className="logOutBtn">Log Out</button>
				</div>
				<div className="shopFloor">
					<AdminNav />
				</div>
			</div>
		</div>
	);
}
