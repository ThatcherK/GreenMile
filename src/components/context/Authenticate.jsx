import React, { useState, createContext } from 'react';

export const authContext = createContext();
const Authenticate = (props) => {
	const [ isloggedIn, setLogIn ] = useState(false);
	const [ code, setCode ] = useState(null);
	const [ name, setName ] = useState(null);
	const [ email, setEmail ] = useState(null);
	const [ number, setNumber ] = useState(null);
	const [ password, setPassword ] = useState(null);
	const [ users, setUser ] = useState([]);
	return (
		<authContext.Provider
			value={{
				isloggedIn,
				setLogIn,
				code,
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
				setUser
			}}
		>
			{props.children}
		</authContext.Provider>
	);
};
export default Authenticate;
