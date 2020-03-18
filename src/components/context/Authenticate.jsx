import React, { useState, createContext } from 'react';
export const authContext = createContext();
const Authenticate = (props) => {
	const [ isloggedIn, setLogIn ] = useState(false);
	const [ code, setCode ] = useState(null);
	return (
		<authContext.Provider value={{ isloggedIn, setLogIn, code, setCode }}>{props.children}</authContext.Provider>
	);
};
export default Authenticate;
