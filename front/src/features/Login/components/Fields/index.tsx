import { ErrorMessage } from "@/components/atoms/ErrorMessage"
import { InputWrapper } from "@/components/molecules/Input"
import { Input } from "@material-tailwind/react"
import React from "react"
import { Control, Controller, FieldErrors } from "react-hook-form"
import { LoginFields } from "../.."

interface Props {
  errors: FieldErrors<LoginFields>
  control: Control<LoginFields, unknown>
}

export const Fields = ({
  errors,
  control,
}: Props) => {
  const emailHasError = Boolean(errors.email?.message)
  const passwordHasError = Boolean(errors.password?.message)

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
