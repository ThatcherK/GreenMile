
import React,{useContext} from 'react';
import { authContext } from '../context/Authenticate';
import axios from 'axios';

const Packages =()=>{
    const { authToken } = useContext(authContext);
    const getPackages = async()=>{
        let results = await axios.get('http://127.0.0.1:5000/packages',{ headers: { Authorization: `Bearer ${authToken}` }})
        console.log (results.data)
    }
    getPackages()
    return (
        <div></div>
    )
}

export default Packages;