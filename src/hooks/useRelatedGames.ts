import { games } from '../data/games';
import { IUseRelatedFilteredGamesParams  } from '../interfaces/interfaces';

export function useRelatedGames({
  currentGame,
  limit = 8,
}: IUseRelatedFilteredGamesParams ) {

  if (!currentGame?.category) return [];

  return games
    .filter(game =>
      game.id !== currentGame.id &&
      game.category.toLowerCase().trim() ===
      currentGame.category.toLowerCase().trim()
    )
    .slice(0, limit);
}
