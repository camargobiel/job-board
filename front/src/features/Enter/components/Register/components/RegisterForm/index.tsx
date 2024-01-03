import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from "./schema";
import { Fields } from "../Fields";

export interface RegisterFields {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, submitCount, isValid }
  } = useForm<RegisterFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })

  const onSubmit = () => {
    console.log('oi')
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10">
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
