import { PasswordInput } from '@/features/auth/presentation/components/password-input'
import { useFormContext, Controller } from 'react-hook-form'

import { Label } from '../label'

interface FormInputProps {
  name: string
  label: string
  type?: string
  placeholder?: string
}

const RHFPasswordInput: React.FC<FormInputProps> = ({ name, label, placeholder }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const getErrorMessage = (name: string): string | undefined => {
    const error = errors[name]
    return error && typeof error.message === 'string' ? error.message : undefined
  }

  return (
    <div className="w-full">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <PasswordInput {...field} id={name} placeholder={placeholder} />}
      />
      {getErrorMessage(name) && <p className="mt-1 max-w-52 text-sm text-red-500">{getErrorMessage(name)}</p>}
    </div>
  )
}

export default RHFPasswordInput
