import React from 'react';

export default function SignIn() {
	return (
        <div className="signInContainer">
            <form className="signInForm">
			<label for="name"> Name</label>
			<input type="text" name="name" placeholder="Name"/>
			<label for="email">Email address</label>
			<input type="text" name="email" placeholder="Email" />
			<label for="Password">Password</label>
			<input type="password" name="password" placeholder="password" /><br/>
			<input type="submit" value="Log In" />
		</form>
        </div>
		
	);
}
