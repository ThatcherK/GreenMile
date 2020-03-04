import React from 'react'

export default function UserForm() {
    return (
            <div className="signUpContainer">
			<form className="signUpForm">
				<input type="text" name="name" placeholder="Name" />
				<input type="text" name="email" placeholder="Email" />
				<input type="text" name="invite-code" placeholder="Invite code" />
				<br />
				<button className="authBtn">
					Add
				</button>
			</form>
		</div>
    
    )
}