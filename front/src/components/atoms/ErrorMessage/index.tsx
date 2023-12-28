interface Props {
  message: string
}

export const ErrorMessage = ({message}: Props) => {
  return <p className="text-red-500 text-xs">{message}</p>
}
