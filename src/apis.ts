import axios, { type AxiosRequestConfig } from 'axios';
import type {
  SignUpBody,
  SignUpResponse,
  SignInBody,
  SignInResponse,
  Todo,
} from './types/todo';

const baseUrl = 'https://todolist-api.hexschool.io';

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = token;
  return config;
});

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 403) {
      localStorage.removeItem('token');
      window.location.href = import.meta.env.BASE_URL;
    }
    return Promise.reject(error);
  },
);

export async function signUp(body: SignUpBody): Promise<SignUpResponse> {
  const { data } = await axios.post(`${baseUrl}/users/sign_up`, body);
  return data;
}

export async function signIn(body: SignInBody): Promise<SignInResponse> {
  const { data } = await axios.post(`${baseUrl}/users/sign_in`, body);
  return data;
}

export async function getTodos(config: AxiosRequestConfig): Promise<Todo[]> {
  const { data } = await axios.get(`${baseUrl}/todos/`, {
    ...config,
  });
  return data.data;
}

export async function postTodo(content: string): Promise<Todo> {
  const { data } = await axios.post(`${baseUrl}/todos/`, { content });
  return data.newTodo;
}

export async function deleteTodo(id: string): Promise<void> {
  await axios.delete(`${baseUrl}/todos/${id}`);
}

export async function toggleStatus(id: string): Promise<void> {
  await axios.patch(`${baseUrl}/todos/${id}/toggle`);
}

export async function putTodo(id: string, content: string): Promise<void> {
  await axios.put(`${baseUrl}/todos/${id}`, { content });
}
