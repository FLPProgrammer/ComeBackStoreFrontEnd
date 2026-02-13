import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/auth/authContext';
import { handleApiError } from '../../utils/handleApiError';

const MAX_ATTEMPTS = 5;
const BLOCK_TIME = 30000; 

export function useLogin() {
  const navigate = useNavigate();
  const { signIn } = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [attempts, setAttempts] = useState(0);
  const [blockedUntil, setBlockedUntil] = useState<number | null>(null);

  function validate(): string | null {
    if (!email.trim()) return 'Email é obrigatório.';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Email inválido.';

    if (!password) return 'Senha é obrigatória.';

    return null;
  }

  async function handleLogin() {
    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }

   
    if (blockedUntil && Date.now() < blockedUntil) {
      setError('Muitas tentativas. Aguarde alguns segundos.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      await signIn(email.trim(), password);

      setAttempts(0);
      navigate('/');
    } catch (error) {
      const appError = handleApiError(error);

      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= MAX_ATTEMPTS) {
        setBlockedUntil(Date.now() + BLOCK_TIME);
        setError('Muitas tentativas. Tente novamente em 30 segundos.');
      } else {
        setError(appError.message || 'Email ou senha inválidos.');
      }
    } finally {
      setLoading(false);
    }
  }

  
  useEffect(() => {
    if (error) setError(null);
  }, [email, password, error]);

  return {
    email,
    password,
    loading,
    error,
    setEmail,
    setPassword,
    handleLogin,
  };
}
