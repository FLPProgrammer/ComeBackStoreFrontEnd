import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/auth.service';

export function useRegister() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleRegister() {
        if(password !== confirmPassword) {
            alert('As senhas não conferem');
            return
        }

        try {
            setLoading(true)

            await authService.register({
                name,
                email,
                password
            });

            alert('Conta criada com sucesso')
            navigate('/login');
        } catch {
            alert('Erro ao criar a conta')
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
        setName,
        setEmail,
        setPassword,
        setConfirmPassword,
        handleRegister,
    }
}