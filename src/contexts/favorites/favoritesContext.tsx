import { createContext, useContext } from 'react';
import { IFavoritesContextType } from '../../interfaces/interfaces';

export const FavoritesContext = createContext<IFavoritesContextType>(
  {} as IFavoritesContextType
);

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
}
