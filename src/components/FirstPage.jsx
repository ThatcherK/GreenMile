import React from 'react';
import SignIn from './SignIn';
import '../App.css';

export default function FirstPage() {
	return (
		<div>
			<div className="firstpageContainer">
				<div className="welcome">
					<div className="welcomeContent">
						<h1>GREEN MILE</h1>

						<h2>
							<i className="fas fa-anchor" /> Secure
						</h2>
						<h2>
							<i className="fas fa-hourglass-half" /> Timely
						</h2>

						<h2>
							<i>"Let Us Take The Weight Off Your Shoulders!!!"</i>{' '}
						</h2>
					</div>
				</div>
				<div className="signFirstPage">
					<SignIn />
					<br />
				</div>
			</div>
		</div>
	);
}
