import { apiClient } from './index';
import { ISignBody } from '../types';
import { AxiosError } from 'axios';

export const loginApi = async (form: ISignBody) => {
  try {
    const response = await apiClient.post('/auth/signin', form);
    return response.data.access_token;
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    if (response?.status === 401) {
      alert('이메일과 비밀번호를 다시 확인해주세요');
    }
    throw new Error();
  }
};
export const signUpApi = async (form: ISignBody) => {
  try {
    const response = await apiClient.post('/auth/signup', form);
    return response.data.access_token;
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    if (response?.status === 400) {
      alert('중복된 이메일입니다.');
    }
    throw new Error();
  }
};
