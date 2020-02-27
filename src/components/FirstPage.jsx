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
						<h2>Let Us Take The Weight Off Your Shoulders!!!</h2>
					</div>
				</div>
				<div className="signFirstPage">
					<SignIn/><br/>
                    <label>Not yet a user?</label><br/>
                    <a href="#">Sign Up</a>
				</div>
			</div>
		</div>
	);
}
