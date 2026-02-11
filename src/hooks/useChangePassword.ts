import { useState } from 'react';
import * as userService from '../services/user.service';
import { handleApiError } from '../utils/handleApiError';

export function useChangePassword(onSuccess?: () => void) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function submit() {
    if (loading) return;

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('Preencha todos os campos.');
      return;
    }

    if (newPassword.length < 5) {
      setError('A nova senha deve ter no mínimo 5 caracteres.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await userService.changePassword({
        currentPassword,
        newPassword,
      });

      setSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');

      onSuccess?.();
    } catch (err: unknown) {
      const apiError = handleApiError(err);
      setError(apiError.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    currentPassword,
    newPassword,
    confirmPassword,
    setCurrentPassword,
    setNewPassword,
    setConfirmPassword,
    submit,
    loading,
    error,
    success,
  };
}
