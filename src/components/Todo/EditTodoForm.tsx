import { useForm, type SubmitHandler } from 'react-hook-form';

type EditTodoFormValues = {
  newContent: string;
};

type EditTodoFormProps = {
  content: string;
  onSubmit: SubmitHandler<EditTodoFormValues>;
};

function EditTodoForm({ content, onSubmit }: EditTodoFormProps) {
  const { register, handleSubmit } = useForm<EditTodoFormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
      <label htmlFor="newContent" className="sr-only">
        編輯待辦事項內容
      </label>
      <input
        id="newContent"
        className="w-full box-border border border-brand-800 rounded-control py-2 px-2.5 text-body leading-normal focus:outline-none"
        defaultValue={content}
        autoFocus
        {...register('newContent')}
        onBlur={handleSubmit(onSubmit)}
      />
    </form>
  );
}

export default EditTodoForm;
