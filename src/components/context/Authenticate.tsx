import React, { FunctionComponent, useState, createContext } from 'react';

type AuthContextType = {
  isloggedIn: boolean;
  role: string;
  setRole: (role: string) => void;
  authToken: string;
  setToken: (token: string) => void;
  setLogIn: (login: boolean) => void;
};

export const authContext = createContext<AuthContextType>({
  role: '',
  isloggedIn: false,
  authToken: '',
  setLogIn: () => console.log('LogIn not implemented'),
  setRole: () => console.log('LogIn not implemented'),
  setToken: () => console.log('LogIn not implemented'),
});

const Authenticate: FunctionComponent = function ({ children }) {
  const [isloggedIn, setLogIn] = useState(false);
  const [role, setRole] = useState('');
  const [authToken, setToken] = useState('');
  return (
    <authContext.Provider
      value={{
        isloggedIn,
        setLogIn,
        role,
        setRole,
        authToken,
        setToken,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
export default Authenticate;
