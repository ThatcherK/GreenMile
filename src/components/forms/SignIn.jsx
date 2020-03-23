import React, { useContext } from 'react';
import { authContext } from '../context/Authenticate';

export default function SignIn(props) {
	const { users, setLogIn } = useContext(authContext);
	let logInMail = null;
	let logInPassword = null;
	const getEmail = (event) => {
		logInMail = event.target.value;
	};
	const getPassword = (event) => {
		logInPassword = event.target.value;
	};
	const handleLogin = () => {
		if (logInMail === users[0].email && logInPassword === users[0].password) {
			setLogIn(true);
		}
	};
	return (
		<div className="signInContainer">
			<form className="signInForm">
				<input type="text" name="email" placeholder="Email" onChange={getEmail} />

				<input type="password" name="password" placeholder="Password" onChange={getPassword} />

				<br />
				<button className="authBtn" onClick={handleLogin}>
					Log In
				</button>
				<br />
				<label>Not yet a user?</label>
				<br />
				<button className="signUpBtn" onClick={props.showSignUp}>
					Sign Up
				</button>
			</form>
		</div>
	);
}
