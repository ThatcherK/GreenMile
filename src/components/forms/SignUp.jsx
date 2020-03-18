import React, { useContext } from 'react';

import { authContext } from '../context/Authenticate';

export default function SignUp() {
	const { setLogIn,setCode } = useContext(authContext);

	const showUser = () => {
		setLogIn(true);
		
	};
	const getInviteCode = (event) => {setCode(Number(event.target.value))};
	// switch(code){
	// 	case 0:
	// }
	return (
		<div className="signUpContainer">
			<form className="signUpForm">
				<input type="text" name="name" placeholder="Name" />
				<input type="text" name="email" placeholder="Email" />
				<input type="text" name="number" placeholder="Phone Number" />
				<input type="text" name="invite-code" placeholder="Invite code" onChange={getInviteCode} />
				<input type="password" name="password" placeholder="Password" />
				<input type="password" name="confirm-password" placeholder="Confirm password" />
				<br />
				<button className="authBtn" onClick={showUser}>
					Sign Up
				</button>
			</form>
		</div>
	);
}
