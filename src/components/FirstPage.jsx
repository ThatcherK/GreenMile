import React, { useState, useContext } from 'react';
import SignIn from './SignIn';
import '../App.css';
import SignUp from './SignUp';
import { authContext } from './context/Authenticate';
// import Admin from './Admin';
import { Redirect } from 'react-router-dom';

export default function FirstPage() {
	const [ show, setShow ] = useState(false);
	const { isloggedIn } = useContext(authContext);

	if (isloggedIn) {
		return <Redirect to="/" />;
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
