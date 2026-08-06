export type Todo = {
  content: string;
  createTime: number;
  id: string;
  status: boolean;
};

export type Filter = 'all' | 'pending' | 'completed';

export type SignUpBody = {
  email: string;
  password: string;
  nickname: string;
};

export type SignUpResponse = {
  status: boolean;
  uid: string;
};

export type SignInBody = {
  email: string;
  password: string;
};

export type SignInResponse = {
  status: boolean;
  exp: number;
  token: string;
  nickname: string;
};

export type ApiErrorResponse = {
  status: boolean;
  message: string;
};

export type EditTodoPayload = {
  id: string;
  content: string;
};
