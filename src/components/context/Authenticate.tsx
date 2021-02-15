import React, { FunctionComponent, useState, createContext } from 'react';

type AuthContextType = {
  isloggedIn: boolean;
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  authToken: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setLogIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const authContext = createContext<Partial<AuthContextType>>({});

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
