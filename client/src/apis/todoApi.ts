import { apiClient, headers } from '.';
import { ITodo } from '../types';

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
