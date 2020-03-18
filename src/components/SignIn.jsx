import React from 'react';

export default function SignIn() {
	return (
		<div className="signInContainer">
			<form className="signInForm">
				<input type="text" name="email" placeholder="Email" />

				<input type="password" name="password" placeholder="password" />

				<br />
				<input type="submit" value="Log In" />
			</form>
		</div>
	);
}
