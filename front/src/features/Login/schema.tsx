import * as z from 'zod';

export const loginSchema = z.object({
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
});
