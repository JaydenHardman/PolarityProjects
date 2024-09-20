import axios, { AxiosInstance } from 'axios'

const baseClient: AxiosInstance = axios.create({
  baseURL: 'https://localhost:5000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default baseClient;