import axios from 'axios';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getTodos, postTodo, deleteTodo, toggleStatus, putTodo } from '../apis';
import { todoKeys } from '../constants/queryKeys';
import type { Todo, EditTodoPayload, ApiErrorResponse } from '../types/todo';

const errorMessage = '發生錯誤，請稍後再試';

const getErrorMessage = (error: unknown): string => {
  if (!error) return '';
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    return error.response?.data?.message || errorMessage;
  }
  return errorMessage;
};

export function useTodos() {
  const queryClient = useQueryClient();
  const invalidateTodos = () =>
    queryClient.invalidateQueries({ queryKey: todoKeys.all });

  const todos = useQuery<Todo[]>({
    queryKey: todoKeys.all,
    queryFn: async ({ signal }) => getTodos({ signal }),
  });

  const addTodoMutation = useMutation({
    mutationFn: postTodo,
    onSettled: invalidateTodos,
  });

  const removeTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSettled: invalidateTodos,
  });

  const toggleTodoMutation = useMutation({
    mutationFn: toggleStatus,
    onSettled: invalidateTodos,
  });

  const editTodoMutation = useMutation({
    mutationFn: ({ id, content }: EditTodoPayload) => putTodo(id, content),
    onSettled: invalidateTodos,
  });

  const clearCompletedMutation = useMutation({
    mutationFn: () =>
      Promise.all(
        (todos.data ?? [])
          .filter((todo) => todo.status)
          .map((todo) => deleteTodo(todo.id)),
      ),
    onSettled: invalidateTodos,
  });

  const errorLog = [
    todos.error,
    addTodoMutation.error,
    removeTodoMutation.error,
    toggleTodoMutation.error,
    editTodoMutation.error,
    clearCompletedMutation.error,
  ]
    .filter(Boolean)
    .map(getErrorMessage);

  return {
    todos: todos.data ?? [],
    isAdding: addTodoMutation.isPending,
    isLoading: todos.isLoading,
    errorLog: errorLog,
    addTodo: addTodoMutation.mutate,
    removeTodo: removeTodoMutation.mutate,
    toggleTodo: toggleTodoMutation.mutate,
    editTodo: editTodoMutation.mutate,
    clearCompleted: clearCompletedMutation.mutate,
  };
}
