import { AxiosRequestConfig } from 'axios';

const httpConfig: AxiosRequestConfig = {
  baseURL: 'https://workclass-takehome-backend.herokuapp.com/',
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export default httpConfig;
