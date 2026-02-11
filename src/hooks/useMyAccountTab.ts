import { useState, useEffect } from 'react';
import { useAuthContext } from '../contexts/auth/authContext';
import * as userService from '../services/user.service';
import { handleApiError } from '../utils/handleApiError';

export function useMyAccountTab() {
  const { user, setUser } = useAuthContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setName(user.name ?? '');
      setEmail(user.email ?? '');
      setPhone(user.phone ?? '');
    }
  }, [user]);

  async function saveProfile() {
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const updatedUser = await userService.updateProfile({
        name,
        email,
        phone,
      });

      setUser(updatedUser);
    } catch (err: unknown) {
      const appError = handleApiError(err);
      setError(appError.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    name,
    email,
    phone,
    setName,
    setEmail,
    setPhone,
    saveProfile,
    loading,
    error,
  };
}
