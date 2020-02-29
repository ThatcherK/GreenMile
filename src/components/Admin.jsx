import React from 'react';

export default function Admin() {
	return (
		<div className="dashboard">
			<div className="sideBar">
				<div>
					<div className="header">
						<i className="fas fa-user-tie fa-2x" />Kaliisa Admin
					</div>
				</div>
				<div className="menu">
					<div className="menuTitle">
						<i class="fas fa-home" />Dash Board
					</div>
					<div className="menuList">
						<div>
							View Suppliers
						</div>
						<div>
							<span>Add Users</span>
						</div>
						<div>
							<span>Pending Invoices</span>
						</div>
						<div>
							<span>Packages</span>
						</div>
					</div>
				</div>
			</div>
			<div className="otherPage">
				<div className="topBar" >
					<button className="logOutBtn">Log Out</button>
				</div>
				<div className="shopFloor" />
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
