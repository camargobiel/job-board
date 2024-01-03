import { LoginForm } from "./components/LoginForm";

export const Login = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center w-96 h-96 bg-blue-400 ">
      <h2 className="my-6 text-2xl font-bold">Login</h2>
      <LoginForm />
      <p className="my-4 self-start">Esqueceu sua senha?</p>
    </div>
  );
}
