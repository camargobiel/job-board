import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from "./schema";
import { Fields } from "./components/Fields";

export interface LoginFields {
  email: string;
  password: string;
}

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, submitCount, isValid }
  } = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = () => {
    console.log('oi')
  }

  return (
    <div className="flex gap-10 items-center justify-center h-screen">
      <div></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-60"
      >
        <Fields
          errors={errors}
          control={control}
        />
        <Button
          placeholder="Entrar"
          type="submit"
          disabled={submitCount > 0 && !isValid}
        >
          Entrar
        </Button>
      </form>
    </div>
  );
}
