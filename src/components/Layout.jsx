
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import SideBar from './admin/SideBar';
import SupplierSideBar from './suppliers/SupplierSideBar';
import AdminNav from './routes/adminNav';
import SupplierNav from './routes/SupplierNav';
import HubManagerNav from './routes/HubManagerNav';
import LoaderNav from './routes/LoaderNav';
import { authContext } from './context/Authenticate';
import HubManagerSideBar from './hubManagers/HubManagerSideBar';
import LoaderSideBar from './loaders/LoaderSideBar';

const Layout = () => {
	const { isloggedIn,setLogIn } = useContext(authContext);
	const localStorageToken = localStorage.getItem('token')
	const role = localStorage.getItem('role')

	const showSideBar = (role) => {
		console.log("In layout")
		if (isloggedIn || localStorageToken) {
			console.log(role)
			switch (role) {
				case 'admin':
					return <SideBar />;

				case 'supplier' :
					return <SupplierSideBar />;

				case 'hub_manager':
					return <HubManagerSideBar />;
				case 'packager':
					return <LoaderSideBar />;
				default:
					return <div />;
			}
		}
	};
	const showNavigation = (role) => {
		switch (role) {
			case 'admin':
				return <AdminNav />;

			case 'supplier':
				return <SupplierNav />;

			case 'hub_manager':
				return <HubManagerNav />;
			case 'packager':
				return <LoaderNav />;
			default:
				return <div />;
		}
	};

	const logOut =()=>{
		localStorage.clear()
		setLogIn(false);
		return <Redirect to="/login"/>
	}

	return (
		<div className="dashboard">
			{showSideBar(role)}
			<div className="otherPage">
				<div className="topBar">
					<button className="logOutBtn" onClick={()=>logOut()}>Log Out</button>
				</div>
				<div className="shopFloor">{showNavigation(role)}</div>
			</div>
		</div>
	);
};

export default Layout;
