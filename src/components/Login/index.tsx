import Aside from './Aside';
import SignIn from './SignIn';

function Login() {
  return (
    <main
      id="loginPage"
      className="min-h-screen flex items-center justify-center bg-brand-100 p-6"
    >
      <div className="flex flex-wrap w-full max-w-card-max bg-white rounded-card overflow-hidden shadow-xl">
        <Aside variant="login" />
        <SignIn />
      </div>
    </main>
  );
}

export default Login;
