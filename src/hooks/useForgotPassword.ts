import { useState } from 'react';
import { passwordService } from '../services/password.service';
import { handleApiError } from '../utils/handleApiError';
import { AppError } from '../utils/appError';
export function useForgotPassword() {


    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<AppError | null>(null)

    async function submit() {
        try {
            setLoading(true);
            setError(null);

            await passwordService.forgotPassword(email);

            alert('Se o email existir, você receberá as instruções para resetar a senha');
        } catch(error) {
            const parsedError = handleApiError(error)
            setError(parsedError);
        } finally {
            setLoading(false);
        }
    }

    return {
        email,
        setEmail,
        loading,
        submit,
        error
    }

}