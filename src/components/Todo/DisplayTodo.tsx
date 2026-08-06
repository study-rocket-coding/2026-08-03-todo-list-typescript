type DisplayTodoProps = {
  content: string;
  completed: boolean;
};

function DisplayTodo({ content, completed }: DisplayTodoProps) {
  return (
    <span
      className={`flex-1 text-body leading-normal py-2 px-2.5 border border-transparent transition-colors ${completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}
    >
      {content}
    </span>
  );
}

export default DisplayTodo;
