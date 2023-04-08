import axios from 'axios';

console.log(`Bearer ${process.env.REACT_APP_MAIL_TOKEN}`);
console.log(`backend ${process.env.REACT_APP_BACKEND_URL}`);
const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_MAIL_TOKEN}`,
  },
});

console.log(instance);
export default instance;
