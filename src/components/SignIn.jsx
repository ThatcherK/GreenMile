import React from 'react';

export default function SignIn() {
	return (
		<div className="signInContainer">
			<form className="signInForm">
				<input type="text" name="email" placeholder="Email" />

				<input type="password" name="password" placeholder="Password" />

				<br />
				<input type="submit" value="Log In" /><br/>
				<label>Not yet a user?</label>
				<br />
				<a href="#">Sign Up</a>
			</form>
		</div>
	);
}
