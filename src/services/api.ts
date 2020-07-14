import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://mime.vercel.app/api/',
});

export default api;
