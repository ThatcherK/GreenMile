import React from 'react';
import { Link } from 'react-router-dom';
import AdminNav from './routes/adminNav';
import Logo from './images/greenmile.png';

export default function Admin() {
	
	return (
		<div className="dashboard">
			<div className="sideBar">
				<div>
					<div className="header">
						<i className="fas fa-user-tie fa-3x" /><div><p>Kaliisa<br></br>Admin</p></div>
					</div>
				</div>
				<div className="menu">
					<div className="menuTitle">
						<i class="fas fa-home" />Dash Board
					</div>
					<div className="menuList">
						<div>
							<Link to="/suppliers">View Suppliers</Link>
						</div>
						<div>
							<Link to="/create-user">Add Users</Link>
						</div>
						<div>
							<Link to="/invoices">Pending Invoices</Link>
						</div>
						<div>
							<Link to="packages">Packages</Link>
						</div>
					</div>
				</div>
			</div>
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
		// <div className="myCards">
		// 	<div>
		// 		<h4>Ssebagala and sons</h4>
		// 	</div>
		// 	<div>
		// 		<h4>Hashra Investments</h4>
		// 	</div>
		// 	<div>
		// 		<h4>Gang Lih Industrial</h4>
		// 	</div>
		// 	<div>
		// 		<h4>Zesar Technologies</h4>
		// 	</div>

		// </div>
	);
}
