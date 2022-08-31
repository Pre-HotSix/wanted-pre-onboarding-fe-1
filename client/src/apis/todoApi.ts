import { AxiosError } from 'axios';
import { apiClient } from '.';
import { ITodo } from '../types';

export const createTodo = async (todo: string) => {
  try {
    const token = localStorage.getItem('access_token');
    return await apiClient.post(
      '/todos',
      { todo: todo },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    if (response?.status === 400) {
      alert('한글자 이상 입력해주세요');
    }
    throw new Error();
  }
};
export const getTodos = async () => {
  try {
    const token = localStorage.getItem('access_token');
    const response = await apiClient.get('/todos', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
export const updateTodo = async (todo: ITodo, params: string) => {
  try {
    const token = localStorage.getItem('access_token');
    return await apiClient.put(`/todos/${params}`, todo, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw new Error();
  }
};
export const removeTodo = async (params: string) => {
  try {
    const token = localStorage.getItem('access_token');
    return await apiClient.delete(`/todos/${params}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw new Error();
  }
};
