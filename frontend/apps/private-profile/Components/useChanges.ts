import { useState, useMemo, type SubmitEvent  } from 'react'

type FormState = {
  username: string
  password: string
  confirmPassword: string
}

type TouchedState = {
  username: boolean
  password: boolean
  confirmPassword: boolean
}

type FieldErrors = {
  username?: string
  password?: string
  confirmPassword?: string
}

export function useChanges() {

    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState<FormState>({
        username: '',
        password: '',
        confirmPassword: '',
    })

    const [touched, setTouched] = useState<TouchedState>({
        username: false,
        password: false,
        confirmPassword: false,
    })

    const [submitError, setSubmitError] = useState<string | null>(null)

    //Real time validation
    const errors = useMemo((): FieldErrors => {
        const errs: FieldErrors = {}

        const usernameStartsWith = form.username.startsWith('@')
        if (!usernameStartsWith) {
            errs.username = 'The username have to start with @.'
        } else if (/\s/g.test(form.username)){
            errs.username = 'Username cannot contain spaces!'
        }

        const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
        if (!form.password) {
        errs.password = 'A senha é obrigatória.'
        } else if (form.password.length < 8) {
        errs.password = 'A senha deve ter no mínimo 8 caracteres.'
        } else if (!pwdRegex.test(form.password)) {
        errs.password = 'Deve conter pelo menos 1 maiúscula, 1 minúscula, 1 número e 1 caractere especial.'
        }

        if (!form.confirmPassword) {
        errs.confirmPassword = 'A confirmação de senha é obrigatória.'
        } else if (form.confirmPassword !== form.password) {
        errs.confirmPassword = 'As senhas não coincidem.'
        }

        return errs
    }, [form])

    const isValid = useMemo(() => {
        return Object.keys(errors).length === 0
    }, [errors])

    function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
        setForm((prev) => ({ ...prev, [key]: value }))
    }

    function handleBlur(field: keyof TouchedState) {
        setTouched((prev) => ({ ...prev, [field]: true }))
    }

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        setSubmitError(null)

        // Marca todos os campos como tocados para exibir todos os erros de uma vez
        setTouched({
            username: true,
            password: true,
            confirmPassword: true,
        })

        
        if (!isValid) return

        setIsLoading(true)

        try {
            //Chama a api
        }catch{
            //catch
        }
    }

  return {
    form,
    touched,
    errors,
    isValid,
    isLoading,
    submitError,
    updateField,
    handleBlur,
    handleSubmit,
  }

}
