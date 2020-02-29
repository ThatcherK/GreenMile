import React,{useState,createContext} from 'react'
export const authContext=createContext();
const Authenticate =(props)=>{
    const [isloggedIn,setLogIn]=useState(false);
    return(
        <authContext.Provider value={{isloggedIn,setLogIn}}>
            {props.children}
        </authContext.Provider>
    )
}
export default Authenticate;