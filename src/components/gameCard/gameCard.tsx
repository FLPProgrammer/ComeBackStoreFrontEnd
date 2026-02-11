import { Link } from 'react-router-dom';
import { Card, ImageWrapper, Info, PriceBox, Actions } from './styles';
import { IGameCardProps } from '../../interfaces/interfaces';
import { useCart } from '../../contexts/cart/cartContext';
import { useFavorites } from '../../contexts/favorites/favoritesContext';
import { FiHeart } from 'react-icons/fi';

export function GameCard({ game }: IGameCardProps) {
  const { addToCart, increase, decrease } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(game.id);

  return (
    <Card as={Link} to={`/produto/${game.id}`}>
      <ImageWrapper>
            <button
                className={`favorite ${favorite ? 'active' : ''}`}
                onClick={(e) => {
                    e.preventDefault();

                    if (favorite) {
                    removeFavorite(game.id);
                    } else {
                    addFavorite({
                        id: game.id,
                        title: game.title,
                        image: game.image,
                        price: Number(game.price),
                        slug: game.slug,
                    });
                    }
                }}
                >
                <FiHeart size={18} />
        </button>

        <img src={game.image} alt={game.title} />
      </ImageWrapper>

      <Info>
        <h3>{game.title}</h3>
        <span>{game.platform}</span>
      </Info>

      <PriceBox>
        <strong>R$ {game.price}</strong>
        <small>
          até {game.installments}x de R$ {game.installmentValue}
        </small>
        <p>
          ou <span>R$ {game.pixPrice}</span> via Pix
        </p>
      </PriceBox>

      <Actions>
        <div className="quantity">
          <button
            onClick={(e) => {
              e.preventDefault();
              decrease(game.id);
            }}
          >
            -
          </button>

          <span>1</span>

          <button
            onClick={(e) => {
              e.preventDefault();
              increase(game.id);
            }}
          >
            +
          </button>
        </div>

        <div className="buttons">
          <button
            className="buy"
            onClick={(e) => {
              e.preventDefault();
              addToCart(game);
            }}
          >
            COMPRAR
          </button>

          <button
            className="cart"
            onClick={(e) => {
              e.preventDefault();
              addToCart(game);
            }}
          >
            Adicionar
          </button>
        </div>
      </Actions>
    </Card>
  );
}
