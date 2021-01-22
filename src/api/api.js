import axios from 'axios';

const api = axios.create({
  baseURL: 'https://glassgow-fox-abc5dasar.herokuapp.com',
});

export default api;
