import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { passwordService } from '../services/password.service'
import { handleApiError } from '../utils/handleApiError';
import { AppError } from '../utils/appError'; 

export function useResetPassword(token: string) {
    const [password, setPassword] =  useState('');
    const [error, setError] = useState<AppError | null>(null);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    
    async function handleSubmit(e: React.FormEvent)  {

        e.preventDefault();

        try {
            setLoading(true)
            setError(null);

            await passwordService.resetPassword(token, password)
            alert('Senha atualizada com sucesso!')
        } catch(error) {
            const parsedError = handleApiError(error);
            setError(parsedError)
        } finally {
            setLoading(false);
            navigate('/login')
        }
    }

    return {
        password,
        setPassword,
        handleSubmit,
        loading,
        error
    }
}