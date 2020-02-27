import React from 'react';

export default function SignIn() {
	return (
        <div className="signInContainer">
            <form>
			<label for="name"> Name:</label><br/>
			<input type="text" name="name" placeholder="Name"/><br/><br/>
			<label for="email">Email address:</label><br/>
			<input type="text" name="email" placeholder="Email" /><br/><br/>
			<label for="Password">Password:</label><br/>
			<input type="password" name="password" placeholder="password" /><br/><br/>
			<input type="submit" value="Submit" />
		</form>
        </div>
		
	);
}
