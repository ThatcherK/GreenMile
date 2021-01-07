import React, { useState, createContext } from 'react';

export const authContext = createContext();
const Authenticate = (props) => {
	const [ isloggedIn, setLogIn ] = useState(false);
	const [role, setRole] = useState(null)
	const [authToken,setToken] = useState(null)
	return (
		<authContext.Provider
			value={{
				isloggedIn,
				setLogIn,
				role,
				setRole,
				authToken,
				setToken
			}}
		>
			{props.children}
		</authContext.Provider>
	);
};
export default Authenticate;
