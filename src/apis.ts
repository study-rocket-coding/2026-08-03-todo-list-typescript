import axios from "axios";

const baseUrl = "https://todolist-api.hexschool.io";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = token;
  return config;
});

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 403) {
      localStorage.removeItem("token");
      window.location.href = import.meta.env.BASE_URL;
    }
    return Promise.reject(error);
  }
);

export async function signUp(signUpEmail, signUpPwd, nickName) {
  try {
    const { data } = await axios.post(`${baseUrl}/users/sign_up`,
      { 
        "email": signUpEmail,
        "password": signUpPwd,
        "nickname": nickName
      }
    );
    return data;
  } catch (error) {
      throw error;
    }
}

export async function signIn(signInEmail, signInPwd) {
  try {
    const { data } = await axios.post(`${baseUrl}/users/sign_in`,
      {
        "email": signInEmail,
        "password": signInPwd
      }
    );
    return data;
  } catch (error) {
      throw error;
    }
}

export async function getTodos(config) {
  try {
    const { data } = await axios.get(`${baseUrl}/todos/`,{
      ...config
    })

    return data.data;

  } catch (error) {
    throw error;
  }
}

export async function postTodo(content) {
  try {
    const { data } = await axios.post(`${baseUrl}/todos/`,
      { content }
    );
    return data.newTodo;

  } catch (error) {
    throw error;
  }
}

export async function deleteTodo(id) {
  try {
    const { data } = await axios.delete(`${baseUrl}/todos/${id}`);
    
  } catch (error) {
    throw error
  }
}

export async function toggleStatus(id) {
  try {
    const { data } = await axios.patch(`${baseUrl}/todos/${id}/toggle`);

  } catch(error) {
    throw error
  }
}

export async function putTodo(id, content) {
  try {
    const { data } = await axios.put(`${baseUrl}/todos/${id}`,
      { content }
    );

  } catch(error) {
    throw error
  }
}