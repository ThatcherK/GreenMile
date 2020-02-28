import React, { useState } from 'react';
import SignIn from './SignIn';
import '../App.css';
import SignUp from './SignUp';

export default function FirstPage() {
	const [ show, setShow ] = useState(false);

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

						<h2>
							<i>"Let Us Take The Weight Off Your Shoulders!!!"</i>{' '}
						</h2>
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
