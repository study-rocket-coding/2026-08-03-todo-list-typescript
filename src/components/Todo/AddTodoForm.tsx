import { useForm } from "react-hook-form";

function AddTodoForm ({ onAdd, isAdding }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch
  } = useForm()

  const content = watch("content");

  const onSubmit = (data) => {
    onAdd(data.content, { onSuccess: () => reset() });
  }

  return (
    <form
      onSubmit={ handleSubmit(onSubmit) }
      className="flex gap-2.5">
      <label htmlFor="newTodoContent" className="sr-only">新增待辦事項</label>
      <input
        id="newTodoContent"
        className="flex-1 h-12 rounded-control border border-gray-200 px-4 text-body bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-brand-800 placeholder:text-gray-400"
        type="text"
        placeholder="請輸入待辦事項"
        { ...register("content") }
      />
      <button
        type="submit"
        disabled={ isAdding || !content?.trim() }
        className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-control bg-brand-800 hover:bg-brand-900 text-white text-heading font-normal leading-none cursor-pointer transition-colors disabled:opacity-45 disabled:cursor-not-allowed disabled:hover:bg-brand-800"
      >
        +
      </button>
    </form>
  )
};

export default AddTodoForm;
