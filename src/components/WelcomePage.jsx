import React, { useState, useContext } from 'react';
import SignIn from './forms/SignIn';
import '../App.css';
import SignUp from './forms/SignUp';
import { authContext } from './context/Authenticate';

import { Redirect } from 'react-router-dom';

export default function WelcomePage() {
	const [ show, setShow ] = useState(false);
	const { isloggedIn, code } = useContext(authContext);
	console.log(isloggedIn);
	console.log(code);

	if (isloggedIn) {
		console.log(code);
		return <Redirect to ="/"/>
	}

	return (
		<div>
			<div className="firstpageContainer">
				<div className="welcome">
					<div className="welcomeContent">
						<h1>GREEN MILE</h1>

						<h2>
							<i className="fas fa-shield-alt" /> Secure
						</h2>
						<h2>
							<i className="fas fa-hourglass-half" /> Timely
						</h2>

						<h3>"Let Us Take The Weight Off Your Shoulders!!!" </h3>
					</div>
				</div>
				{show === false && (
					<div className="signFirstPage">
						<SignIn showSignUp={() => setShow(true)} />
						<br />
					</div>
				)}
				<div className="signFirstPage">{show === true && <SignUp />}</div>
			</div>
		</div>
	);
}
