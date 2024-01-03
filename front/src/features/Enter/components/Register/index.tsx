import { RegisterForm } from "./components/RegisterForm";

export const Register = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center w-96 h-96 bg-blue-400 ">
      <h2 className="my-6 text-2xl font-bold">Cadastro</h2>
      <RegisterForm />
    </div>
  );
}
