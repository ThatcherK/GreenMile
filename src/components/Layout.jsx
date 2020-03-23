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
    const { isloggedIn, code,setLogIn } = useContext(authContext);
	const showSideBar = () => {
		if (isloggedIn) {
			switch (code) {
				case 0:
					return <SideBar />;

				case 1:
					return <SupplierSideBar />;

				case 2:
					return <HubManagerSideBar />;
				case 3:
					return <LoaderSideBar />;
				default:
					return <div />;
			}
		}
	};
	const showNavigation = () => {
		switch (code) {
			case 0:
				return <AdminNav />;

			case 1:
				return <SupplierNav />;

			case 2:
				return <HubManagerNav />;
			case 3:
				return <LoaderNav />;
			default:
				return <div />;
		}
	};

	const logOut =()=>{
		
		setLogIn(false);
		return <Redirect to="/login"/>
	}

	return (
		<div className="dashboard">
			{showSideBar()}
			<div className="otherPage">
				<div className="topBar">
					<button className="logOutBtn" onClick={()=>logOut()}>Log Out</button>
				</div>
				<div className="shopFloor">{showNavigation()}</div>
			</div>
		</div>
	);
};

export default Layout;
