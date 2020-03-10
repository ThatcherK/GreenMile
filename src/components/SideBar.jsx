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
							<Link to="/suppliers">Suppliers</Link>
						</div>
						<div>
							<Link to="/hub-managers">Hub Managers</Link>
						</div>
						<div>
							<Link to="/invoices">Invoices</Link>
						</div>
						<div>
							<Link to="loaders">Loaders</Link>
						</div>
					</div>
				</div>
			</div>
    )
}
export default SideBar