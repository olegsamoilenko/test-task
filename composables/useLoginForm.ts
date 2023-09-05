import { useForm } from "vee-validate";
import * as yup from 'yup';
import { toTypedSchema } from '@vee-validate/yup';

interface LoginForm {
    email: string;
    password: string;
}

export default function useLoginForm() {
    const { errors, handleSubmit, defineInputBinds } = useForm<LoginForm>({
        validationSchema: toTypedSchema(
            yup.object({
                email: yup.string().email('Введіть корректну адресу електронної пошти').required('Email обов’язковий'),
                password: yup.string().min(6, 'Пароль має мати мінімум 6 символів').required('Пароль обов’язковий'),
            }),
        ),
    });

    return {
        errors,
        defineInputBinds,
        handleSubmit
    }
}



