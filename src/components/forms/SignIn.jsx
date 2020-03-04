import React from 'react';

export default function SignIn(props) {
	return (
		<div className="signInContainer">
			<form className="signInForm">
				<input type="text" name="email" placeholder="Email" />

				<input type="password" name="password" placeholder="Password" />

				<br />
				<button className="authBtn" >Log In</button>
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
