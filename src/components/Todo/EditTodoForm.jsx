import { useForm } from "react-hook-form";

function EditTodoForm ({ content, onSubmit }) {
  const {
    register,
    handleSubmit
  } = useForm()

  return (
    <form onSubmit={ handleSubmit(onSubmit) } className="flex-1">
      <label htmlFor="newContent" className="sr-only">編輯待辦事項內容</label>
      <input
        id="newContent"
        className="w-full box-border border border-brand-800 rounded-control py-2 px-2.5 text-body leading-normal focus:outline-none"
        defaultValue={ content }
        autoFocus
        { ...register("newContent") }
        onBlur={ handleSubmit(onSubmit) }/>
    </form>
    )
};

export default EditTodoForm;
