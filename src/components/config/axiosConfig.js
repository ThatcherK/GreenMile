import axios from 'axios'

const instance = axios.create({baseURL: process.env.REACT_APP_API_URL})

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.authorization = `Bearer ${token}`; 
    }
    config.headers['Access-Control-Allow-Origin'] = '*'; 
    return config;
  });
export default instance