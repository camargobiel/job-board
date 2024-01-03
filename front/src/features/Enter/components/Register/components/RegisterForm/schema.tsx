import * as z from 'zod';

export const registerSchema = z.object({
  name: z
    .string({
      required_error: 'Nome é obrigatório',
    }),
  email: z
    .string({
      required_error: 'E-mail é obrigatório',
    })
    .email({
      message: "E-mail inválido",
    }),
  password: z
    .string({
      required_error: 'Senha é obrigatória',
    })
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
  confirmPassword: z
    .string({
      required_error: 'As senhas devem ser iguais',
    })
}).superRefine((data) => {
  if (data.password !== data.confirmPassword) {
    return {
      message: "As senhas devem ser iguais",
      path: ["confirmPassword"]
    }
  }
  return true;
})
