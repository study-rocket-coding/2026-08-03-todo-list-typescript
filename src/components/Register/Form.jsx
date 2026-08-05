import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router'
import { fields, subTitle } from './data'
import { signUp } from '../../apis'

const Input = ({ label, name, register, required, rules = {}, errors, isFirst, ...props }) => {
  const fieldError = errors[name];
  return (
    <>
      <label className={`text-body font-normal ${isFirst ? "" : "mt-2.5"} mb-1.5 text-gray-900`} htmlFor={name}>{label}</label>
      <input
        id={name}
        className="w-full box-border font-normal bg-white text-gray-900 border border-gray-200 rounded-control h-11 px-3.5 text-body mb-1.5 focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-brand-800 placeholder:text-gray-400"
        {...props}
        {...register(name, { required, ...rules })}/>
      {fieldError && (
        <p className="text-red-600 text-label mt-0 mb-2">{ fieldError.message }</p>
      )}
    </>
  )
}

function Form() {
  let navigate = useNavigate();
  const [errorLog, setErrorLog] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const onSubmit = async (data) => {
    setErrorLog('');
    try {
      await signUp(data.email, data.password, data.name);
      alert('恭喜成功註冊，歡迎加入');
      navigate('/');

    } catch (error) {
      console.log(error.response?.data?.message);
      setErrorLog(error.response?.data?.message || "發生錯誤，請稍後再試")
    }
  }

  return (
    <div className="flex-1 min-w-form-min py-12 px-10 flex flex-col justify-center">
      <form className="flex flex-col mt-6" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-semibold mb-6 text-heading text-gray-900">
          { subTitle }
        </h1>
        {
          fields.map((field, i) => (
            <Input key={field.name} {...field} isFirst={i === 0} register={ register } errors={errors} />
          ))
        }
        <button
          type="submit"
          className="h-control-h rounded-pill bg-brand-800 hover:bg-brand-900 text-white border-none self-center my-5 font-bold cursor-pointer text-center text-body px-10 transition-colors"
        >
          註冊帳號
        </button>
        { errorLog &&
          <p className="text-red-600 text-center mb-3 text-label"> { errorLog } </p>
        }
        <Link
          to="/"
          className="block text-gray-900 font-bold no-underline text-center text-label hover:text-brand-900 transition-colors"
        >
          登入
        </Link>
      </form>
    </div>
  )
};

export default Form;
