import { useParams, useSearchParams } from 'react-router-dom';
import { games } from '../data/games';
import { categories } from '../data/categories';
import { IGame } from '../interfaces/interfaces';

export function useCategory() {
  const { slug, category } = useParams();
  const [searchParams] = useSearchParams();

  const currentSlug = slug || category;
  const platform = searchParams.get('platform');

  const currentCategory = categories.find(
    category => category.slug === currentSlug
  );

  let filteredGames: IGame[] =
    currentSlug === 'all' || currentSlug === 'todos'
      ? games
      : games.filter(game => game.category === currentSlug);


  if (platform === 'series') {
    filteredGames = filteredGames.filter(game =>
      game.platform.toLowerCase().includes('series')
    );
  }

  return {
    currentSlug,
    currentCategory: currentCategory ?? {
      name: 'Todos os Jogos',
      slug: 'all'
    },
    games: filteredGames
  };
}
