import { Container, WishlistGrid, WishlistItem } from './styles';
import { useFavorites } from '../../../contexts/favorites/favoritesContext';
import { Link } from 'react-router-dom';

export function WishlistTab() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <Container>
        <h2>Lista de Desejos</h2>
        <p>Sua lista de desejos está vazia.</p>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Lista de Desejos</h2>

      <WishlistGrid>
        {favorites.map(game => (
          <WishlistItem key={game.id}>
            <img src={game.image} alt={game.title} />

            <div className="info">
              <strong>{game.title}</strong>

              <Link to={`/produto/${game.slug}`}>
                Ver produto
              </Link>
            </div>

            <button
              className="remove"
              onClick={() => removeFavorite(game.id)}
            >
              Remover
            </button>
        </WishlistItem>
        ))}
      </WishlistGrid>
    </Container>
  );
}
