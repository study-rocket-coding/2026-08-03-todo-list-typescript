import Aside from '../Login/Aside';
import Form from './Form';

function Register() {
  return (
    <main
      id="signUpPage"
      className="min-h-screen flex items-center justify-center bg-brand-100 p-6"
    >
      <div className="flex flex-wrap w-full max-w-card-max bg-white rounded-card overflow-hidden shadow-xl">
        <Aside variant="register" />
        <Form />
      </div>
    </main>
  );
}

export default Register;
