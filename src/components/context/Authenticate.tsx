import React, { FunctionComponent, useState, createContext } from 'react';

export const authContext = createContext({});

const Authenticate:FunctionComponent = ({children}) => {
	const [ isloggedIn, setLogIn ] = useState<boolean>(false);
	const [role, setRole] = useState<string>("")
	const [authToken,setToken] = useState<string>("")
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
			{children}
		</authContext.Provider>
	);
};
export default Authenticate;
