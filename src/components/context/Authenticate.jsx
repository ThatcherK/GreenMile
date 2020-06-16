import React, { useState, createContext } from 'react';

export const authContext = createContext();
const Authenticate = (props) => {
	const [ isloggedIn, setLogIn ] = useState(false);
	const [ invite_code, setCode ] = useState(null);
	const [ name, setName ] = useState(null);
	const [ email, setEmail ] = useState(null);
	const [ number, setNumber ] = useState(null);
	const [ password, setPassword ] = useState(null);
	const [ users, setUser ] = useState([]);
	const [role, setRole] = useState(null)
	const [authToken,setToken] = useState(null)
	return (
		<authContext.Provider
			value={{
				isloggedIn,
				setLogIn,
				invite_code,
				setCode,
				name,
				setName,
				email,
				setEmail,
				number,
				setNumber,
				password,
				setPassword,
				users,
				setUser,
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
