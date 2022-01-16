import axios from 'axios';

const api = axios.create({
  baseURL: "https://off-us.vercel.app/api/"
});
// baseURL: "https://off-us.vercel.app/"
// baseURL: "http://localhost:3000/api/"

export default api

