import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://classapi.sepehracademy.ir/api',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
});
export default instance;
