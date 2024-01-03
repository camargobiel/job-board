import { ErrorMessage } from "@/components/atoms/ErrorMessage"
import { InputWrapper } from "@/components/molecules/Input"
import { Input } from "@material-tailwind/react"
import React from "react"
import { Control, Controller, FieldErrors } from "react-hook-form"
import { RegisterFields } from "../RegisterForm"

interface Props {
  errors: FieldErrors<RegisterFields>
  control: Control<RegisterFields, unknown>
}

export const Fields = ({
  errors,
  control,
}: Props) => {
  const nameHasError = Boolean(errors.name?.message)
  const emailHasError = Boolean(errors.email?.message)
  const passwordHasError = Boolean(errors.password?.message)
  const confirmPasswordHasError = Boolean(errors.confirmPassword?.message)

  return (
    <React.Fragment>
      <Controller
        name="name"
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputWrapper>
            <Input
              crossOrigin={undefined}
              label="Nome"
              value={value}
              onChange={onChange}
              error={nameHasError}
            />
            {errors.name?.message && <ErrorMessage message={errors.name?.message} />}
          </InputWrapper>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputWrapper>
            <Input
              crossOrigin={undefined}
              label="E-mail"
              value={value}
              onChange={onChange}
              error={emailHasError}
            />
            {errors.email?.message && <ErrorMessage message={errors.email?.message} />}
          </InputWrapper>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputWrapper>
            <Input
              type="password"
              value={value}
              onChange={onChange}
              crossOrigin={undefined}
              label="Senha"
              error={passwordHasError}
            />
            {errors.password?.message && <ErrorMessage message={errors.password?.message} />}
          </InputWrapper>
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputWrapper>
            <Input
              type="password"
              value={value}
              onChange={onChange}
              crossOrigin={undefined}
              label="Confirmar senha"
              error={confirmPasswordHasError}
            />
            {errors.confirmPassword?.message && <ErrorMessage message={errors.confirmPassword?.message} />}
          </InputWrapper>
        )}
      />
    </React.Fragment>
  )
}
