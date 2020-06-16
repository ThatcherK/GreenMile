import React, { useState, useContext} from 'react';
import { authContext } from '../context/Authenticate';
import axios from 'axios';

export default function SignIn(props) {
	const { isloggedIn,setLogIn,setRole,setToken } = useContext(authContext);
	const [email,setEmail] = useState(null)
	const [password,setPassword] = useState(null)

	
	const getEmail = (event) => {
		setEmail(event.target.value);
	};
	const getPassword = (event) => {
		 setPassword(event.target.value);
	};
	const data= {'email':email,'password':password}
	
	const checkUser= ()=>{
			axios.post('http://127.0.0.1:5000/login',data)
									 .then((response) =>{
										 setLogIn(true)
										 setRole(response.data.user['role'])
										 setToken(response.data.auth_token)
										 return response.data
									 })
									 .catch((err) => {
										 return err
										});

	};

	const handleLogin = (e) => {
		e.preventDefault()
		checkUser()
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
