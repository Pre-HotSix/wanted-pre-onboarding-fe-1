import axios, { AxiosRequestHeaders } from 'axios';
import { ISignBody, ITodo } from '../types';

// baseURL:
//     'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/',

const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

const headers: AxiosRequestHeaders = {
  Authorization: `Bearer ${localStorage.getItem('access_token')}` || '',
};

export const loginApi = async (form: ISignBody) => {
  try {
    const response = await apiClient.post('/auth/signin', form);
    return response.data.access_token;
  } catch (error) {
    throw new Error();
  }
};
export const signUpApi = async (form: ISignBody) => {
  try {
    const response = await apiClient.post('/auth/signup', form);
    return response.data.access_token;
  } catch (error) {
    throw new Error();
  }
};
export const createTodo = async (todo: string) => {
  try {
    return await apiClient.post('/todos', { todo: todo }, { headers });
  } catch (error) {
    throw new Error();
  }
};
export const getTodos = async () => {
  try {
    const response = await apiClient.get('/todos', { headers });
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
export const updateTodo = async (todo: ITodo, params: string) => {
  try {
    return await apiClient.put(`/todos/${params}`, todo, { headers });
  } catch (error) {
    throw new Error();
  }
};
export const removeTodo = async (params: string) => {
  try {
    return await apiClient.delete(`/todos/${params}`, { headers });
  } catch (error) {
    throw new Error();
  }
};
