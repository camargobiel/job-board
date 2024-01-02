import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from "./schema";
import { Fields } from "./components/Fields";
import { motion } from "framer-motion";

export interface RegisterFields {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
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
    <motion.div className="flex flex-col gap-10 items-center justify-center h-screen">
      <h2>Cadastro</h2>
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
    </motion.div>
  );
}
