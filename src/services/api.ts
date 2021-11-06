import axios from 'axios';


const api = axios.create({
  baseURL: 'http://biblioteca.supero.com.br/',
});


export default api;
