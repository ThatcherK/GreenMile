import React, { useContext } from 'react';

import { authContext } from '../context/Authenticate';

export default function SignUp() {
	const { setLogIn } = useContext(authContext);
	const showAdmin = () => {
		setLogIn(true);
	};

	return (
		<div className="signUpContainer">
			<form className="signUpForm">
				<input type="text" name="name" placeholder="Name" />
				<input type="text" name="email" placeholder="Email" />
				<input type="text" name="number" placeholder="Phone Number" />
				<input type="text" name="invite-code" placeholder="Invite code" />
				<input type="password" name="password" placeholder="Password" />
				<input type="password" name="confirm-password" placeholder="Confirm password" />
				<br />
				<button className="authBtn" onClick={showAdmin}>
					Sign Up
				</button>
			</form>
		</div>
	);
}
