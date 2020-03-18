import React from 'react';
import AdminNav from '../routes/adminNav';
import SideBar from '../SideBar';

export default function Admin() {
	return (
		<div className="dashboard">
			<SideBar />
			<div className="otherPage">
				<div className="topBar">
					<button className="logOutBtn">Log Out</button>
				</div>
				<div className="shopFloor">
					<AdminNav />
				</div>
			</div>
		</div>
	);
}
