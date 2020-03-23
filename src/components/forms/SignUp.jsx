import React, { useContext } from 'react';
import { authContext } from '../context/Authenticate';

export default function SignUp(props) {
	const {
		users,
		setCode,
		code,
		setName,
		name,
		setEmail,
		email,
		setNumber,
		number,
		setPassword,
		password,
		setUser
	} = useContext(authContext);

	const getInput = (event) => {
		switch (event.target.name) {
			case 'name':
				setName(event.target.value);
				break;
			case 'email':
				setEmail(event.target.value);
				break;
			case 'number':
				setNumber(Number(event.target.value));
				break;
			case 'password':
				setPassword(event.target.value);
				break;
			case 'invite-code':
				setCode(Number(event.target.value));
				break;
			default:
				return null;
		}
	};

	const addUser = (e) => {
		e.preventDefault();
		setUser([ ...users, { code, name, email, password, number } ]);
		props.hideSignUp();
	};

	return (
		<div className="signUpContainer">
			<form className="signUpForm">
				<input type="text" name="name" placeholder="Name" onChange={getInput} />
				<input type="text" name="email" placeholder="Email" onChange={getInput} />
				<input type="text" name="number" placeholder="Phone Number" onChange={getInput} />
				<input type="text" name="invite-code" placeholder="Invite code" onChange={getInput} />
				<input type="password" name="password" placeholder="Password" onChange={getInput} />
				<input type="password" name="confirm-password" placeholder="Confirm password" />
				<br />
				<button className="authBtn" onClick={addUser}>
					Sign Up
				</button>
			</form>
		</div>
	);
}
