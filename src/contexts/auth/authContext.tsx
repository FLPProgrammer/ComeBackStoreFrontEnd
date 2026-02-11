import { createContext, useContext } from 'react';
import { IAuthContextData } from '../../interfaces/interfaces';

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export function useAuthContext() {
    return useContext(AuthContext);
}

