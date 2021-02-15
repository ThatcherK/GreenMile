import React, { useState, useContext, FunctionComponent } from 'react';
import SignIn from './forms/SignIn';
import '../App.css';
import SignUp from './forms/SignUp';
import { authContext } from './context/Authenticate';
import { Redirect } from 'react-router-dom';

const WelcomePage: FunctionComponent = () => {
  const [show, setShow] = useState<boolean>(false);
  const { isloggedIn } = useContext(authContext);
  const localStorageToken: string | null = localStorage.getItem('token');

  if (isloggedIn || localStorageToken) {
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

            <h3>&quot;Let Us Take The Weight Off Your Shoulders!!!&quot; </h3>
          </div>
        </div>
        {show === false && (
          <div className="signFirstPage">
            <SignIn showSignUp={() => setShow(true)} />
            <br />
          </div>
        )}
        <div className="signFirstPage">
          {show === true && <SignUp hideSignUp={() => setShow(false)} />}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
