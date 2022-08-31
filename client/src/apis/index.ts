import axios, { AxiosRequestHeaders } from 'axios';

export const token = localStorage.getItem('access_token');

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API_KEY,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const headers: AxiosRequestHeaders = {
  Authorization: `Bearer ${token}`,
};
