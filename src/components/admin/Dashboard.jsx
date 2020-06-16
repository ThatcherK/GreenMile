import React, { useState } from 'react';
import UserForm from '../forms/UserForm';

export default function Dashboard() {
	// const [ showUserForm, setUserForm ] = useState(false);
	const [modalOpen,setIsOpen] = useState(false)

	const handleAddUser = () => {
		// setUserForm(true);
		setIsOpen(true)
	};

	const closeModal = () => {
        setIsOpen(false)
    }
	return (
		<div className="adminDashboard">
			<div className="side">
				<button onClick={handleAddUser}>Add user</button>
				<UserForm isOpen ={	modalOpen} modalClose={closeModal}/>
				<div>
					<h1>1000</h1>
					<p>SUPPLIERS</p>
				</div>
				<div>
					<h1>10000</h1>
					<p>PACKAGES</p>
				</div>
				<div>
					<h1>20</h1>
					<p>HUBS</p>
				</div>
			</div>
			<div className="main">
				<h2>Graph on packages</h2>
			</div>
		</div>
	);
}
