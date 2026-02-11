import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/auth/authContext';


export function useLogin() {
    const navigate = useNavigate();
    const { signIn } = useAuthContext();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleLogin() {
        try {
            setLoading(true);
            await signIn(email, password)
            navigate('/');
        } catch {
            alert('Email ou senha inválidos');
        } finally {
            setLoading(false);
        }
    }

    return {
        email,
        password,
        loading,
        setEmail,
        setPassword,
        handleLogin,
    }
}