interface Props {
  children: React.ReactNode
}

export const InputWrapper = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {children}
    </div>
  )
}
