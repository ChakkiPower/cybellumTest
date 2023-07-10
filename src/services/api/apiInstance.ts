import axios from 'axios';
import { BASE_URL } from '../../consts/urls';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
