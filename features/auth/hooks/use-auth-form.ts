import { useRouter } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

import { UseAccountStore } from '../context/use-account-store'

const schema = z.object({
  ci: z.string().min(1, 'Cédula requerida').max(10, 'Cédula no puede tener más de 10 caracteres'),
  password: z.string().min(1, 'La contraseña es requerida'),
})

type FormFields = z.infer<typeof schema>

export function useAuth() {
  const router = useRouter()
  const { login } = UseAccountStore()

  const methods = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      ci: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const isLogged = await login(data)
    if (!isLogged) return
    router.push('/quotes')
  }

  return { onSubmit, methods, isSubmiting: methods.formState.isSubmitting }
}
