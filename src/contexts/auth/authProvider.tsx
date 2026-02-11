import { useState, useEffect } from 'react';
import { AuthContext } from './authContext';
import { IUser, IAuthProviderProps } from '../../interfaces/interfaces';
import * as authService from '../../services/auth.service';
import { api } from '../../services/api';



export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function signIn(email: string, password: string) {
    const { user, token } = await authService.login({ email, password });

    setUser(user);
    setIsAuthenticated(true);

    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  async function signOut() {
    await authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  }

  function setUserData(user: IUser) {
    setUser(user);
  }


  useEffect(() => {
    async function loadUser() {
      try {
        const response = await authService.me();
        setUser(response.user);
        setIsAuthenticated(true);
      } catch {
        setUser(null);
        setIsAuthenticated(false);
      }
    }

    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signOut,
        setUser: setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


