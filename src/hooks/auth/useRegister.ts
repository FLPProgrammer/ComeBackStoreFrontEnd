import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/auth.service';
import { handleApiError } from '../../utils/handleApiError';

export function useRegister() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function validate(): string | null {

        if(!name.trim()) {
            return 'Nome é obrigatório!';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(!emailRegex.test(email)) {
            return 'Email inválido';
        }

        if(password.length < 6) {
            return 'A senha deve ter no mínimo 6 caracteres';
        }

        if(password !== confirmPassword) {
            return 'As senhas não coincidem'
        }
        return null;
    }



    async function handleRegister() {
        const validationError  = validate();

        if(validationError ) {
            setError(validationError)
            return;
        }

        try {
            setLoading(true)
            setError(null)

            await authService.register({
                name,
                email,
                password,
            });
            
            navigate('/login')
        } catch(error) {
            const appError = handleApiError(error);
            setError(appError.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        name,
        email,
        password,
        confirmPassword,
        loading,
        error,
        setName,
        setEmail,
        setPassword,
        setConfirmPassword,
        handleRegister,
    }
}