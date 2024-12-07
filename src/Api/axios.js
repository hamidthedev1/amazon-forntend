import axios from "axios"
const axiosInstance = axios.create({
// local instance of express
  // baseURL: "http://localhost:5000",
  
  // deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-2x0m.onrender.com/",
});
export {axiosInstance}