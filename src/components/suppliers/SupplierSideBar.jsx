import React from 'react';
import { Link } from 'react-router-dom';

export default function SupplierSideBar() {
    return (
        <div className="sideBar">
				<div>
					<div className="header">
						<div><p>Kaliisa<br></br>Admin</p></div>
					</div>
				</div>
				<div className="menu">
					<div className="menuTitle">
						<i className="fas fa-home" /><Link to="/">Dash Board</Link>
					</div>
					<div className="menuList">
						<div>
							<Link to="/packages">Packages</Link>
						</div>
					
						<div>
							<Link to="/invoice">Invoices</Link>
						</div>
						
					</div>
				</div>
			</div>
    )
}