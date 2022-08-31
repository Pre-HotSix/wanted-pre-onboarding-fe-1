import { apiClient } from './index';
import { ISignBody } from '../types';

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
