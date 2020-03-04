import React from 'react';
import { Link } from 'react-router-dom';

const SideBar=() =>{
    return (
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
    )
}
export default SideBar