import axios from "axios"
import { getToken } from "../utilis";



export const  httpClient = axios.create({
  
    baseURL: 'https://backend-ten-taupe-86.vercel.app/',
    timeout: 5000,
  });

httpClient.interceptors.request.use(function(config){
  const token = getToken()
  if (token != null) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;

},
function(error){
  return Promise.reject(error);
}

 )