import axios from 'axios';

const callAPI = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000/'
})

export default callAPI;
