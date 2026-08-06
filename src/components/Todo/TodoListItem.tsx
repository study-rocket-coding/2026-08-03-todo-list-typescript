import { useState } from 'react';
import EditTodoForm from './EditTodoForm';
import DisplayTodo from './DisplayTodo';
import type { EditTodoPayload } from '../../types/todo';

type TodoListItemProps = {
  id: string;
  status: boolean;
  content: string;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onEdit: (
    payload: EditTodoPayload,
    options?: { onSuccess?: () => void },
  ) => void;
};

function TodoListItem({
  id,
  status,
  content,
  onDelete,
  onToggle,
  onEdit,
}: TodoListItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = (data: { newContent: string }) => {
    onEdit(
      { id, content: data.newContent },
      { onSuccess: () => setIsEditing(false) },
    );
  };

  return (
    <li
      data-id={id}
      className="flex items-center gap-3.5 py-3.5 px-2 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
    >
      <label
        htmlFor={`todo-${id}`}
        className="sr-only"
      >{`將「${content}」標記為${status ? '未完成' : '已完成'}`}</label>
      <input
        id={`todo-${id}`}
        className="w-5 h-5 flex-shrink-0 accent-brand-800 cursor-pointer"
        type="checkbox"
        checked={status}
        onChange={() => onToggle(id)}
      />
      {isEditing ? (
        <EditTodoForm content={content} onSubmit={onSubmit} />
      ) : (
        <DisplayTodo content={content} completed={status} />
      )}
      <button
        type="button"
        onClick={() => setIsEditing(!isEditing)}
        className="text-caption font-normal text-gray-600 bg-transparent border border-gray-300 rounded-control py-1.5 px-2.5 cursor-pointer whitespace-nowrap flex-shrink-0 hover:bg-brand-100 hover:text-brand-800 hover:border-brand-800 transition-colors"
      >
        編輯
      </button>
      <button
        type="button"
        onClick={() => onDelete(id)}
        aria-label="刪除"
        className="w-[26px] h-[26px] flex-shrink-0 flex items-center justify-center rounded-control border-none bg-transparent text-gray-400 text-lg leading-none cursor-pointer hover:bg-red-50 hover:text-red-600 transition-colors"
      >
        ×
      </button>
    </li>
  );
}

export default TodoListItem;
