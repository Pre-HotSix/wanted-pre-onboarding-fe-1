import axios from 'axios';

export const token = localStorage.getItem('access_token');

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API_KEY,
});

//전역으로 불러오는게 아니라 변수를 호출할떄 토큰이 들어와있는데 여기서 밑에 담기는 token이 없다
