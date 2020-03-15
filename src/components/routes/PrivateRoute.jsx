import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from '../context/Authenticate';
const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isloggedIn } = useContext(authContext);
	return (
		<Route
			{...rest}
			render={(props) =>
				isloggedIn ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
				)}
		/>
	);
};

export default PrivateRoute;
