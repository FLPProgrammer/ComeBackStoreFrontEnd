import { useEffect, useState } from 'react';
import { FavoritesContext } from './favoritesContext';
import { IFavoriteGame } from '../../interfaces/interfaces';
import { getCookie, setCookie } from '../../utils/cookies';

const FAVORITES_COOKIE_KEY = 'favorite_items';

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<IFavoriteGame[]>(() => {
    return getCookie<IFavoriteGame[]>(FAVORITES_COOKIE_KEY) ?? [];
  });

  useEffect(() => {
    setCookie(FAVORITES_COOKIE_KEY, favorites);
  }, [favorites]);

  function addFavorite(game: IFavoriteGame) {
    setFavorites(prev =>
      prev.some(item => item.id === game.id)
        ? prev
        : [...prev, game]
    );
  }

  function removeFavorite(id: number) {
    setFavorites(prev => prev.filter(item => item.id !== id));
  }

  function isFavorite(id: number) {
    return favorites.some(item => item.id === id);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        totalFavorites: favorites.length,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
