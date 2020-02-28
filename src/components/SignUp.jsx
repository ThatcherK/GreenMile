import React from 'react'

export default function SignUp() {
    return (
        <div className="signUpContainer">
            <form className="signUpForm">
                <input type="text" name="name" placeholder="Name"  />
				<input type="text" name="email" placeholder="Email"  />
                <input type="text" name="invite-code" placeholder="Invite code"  />
				<input type="password" name="password" placeholder="Password"  />
                <input type="password" name="confirm-password" placeholder="Confirm password" />
				<br />
				<input type="submit" value="Sign Up" />
			</form>
        </div>
    )
}
