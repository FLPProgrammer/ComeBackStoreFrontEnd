  import {
    Container,
    BoxIcon,
    BoxOptions,
    AccountWrapper,
    AccountDropdown,
    AccountItem,
    AccountCTA,
    AtendimentoWrapper,
    AtendimentoDropdown,
    DropdownItem,
    IconBox,
    TextBox,
    CartWrapper,
    CartBadge,
    CartDropdown,
    CartItem,
    CartFooter,
    FavoritesWrapper,
    FavoritesBadge,
    FavoritesDropdown,
    FavoriteItem,
    UserWelcome,
    LogoutButton
  } from './styles';


  import { SearchBar } from '../searchBar/searchBar';

  import {
    FiHelpCircle,
    FiUser,
    FiShoppingCart,
    FiHeart,
    FiPhone,
    FiMessageCircle,
    FiLogOut,
  } from 'react-icons/fi';

  import { FaWhatsapp } from 'react-icons/fa';
  import { Link } from 'react-router-dom';

  import  { useCart } from '../../contexts/cart/cartContext';
  import { useFavorites } from '../../contexts/favorites/favoritesContext';
  import { useAccountNavigation } from '../../hooks/useAccountNavigation';
  import { useAuthContext } from '../../contexts/auth/authContext'

  export function Header() {
    const { goToAccount } = useAccountNavigation();
    const { items, totalItems, totalPrice } = useCart();
    const { favorites, totalFavorites, removeFavorite } = useFavorites();
    const { user, signOut } = useAuthContext();

    return (
      <Container>
        <BoxIcon>
          <Link to="/">
            <img src="/icon.png" alt="Logo" />
          </Link>
        </BoxIcon>

        <SearchBar />

        <BoxOptions>
          {/* ATENDIMENTO */}
          <AtendimentoWrapper>
            <FiHelpCircle size={22} color="#6A0DAD" />
            <h3>Atendimento</h3>

            <AtendimentoDropdown>
              <DropdownItem>
                <IconBox>
                  <FiPhone size={16} />
                </IconBox>
                <TextBox>
                  <strong>Telefone</strong>
                  <span>(99) 9999-9999</span>
                </TextBox>
              </DropdownItem>

              <DropdownItem>
                <IconBox>
                  <FaWhatsapp size={16} />
                </IconBox>
                <TextBox>
                  <strong>Whatsapp</strong>
                  <span>(42) 99903-3921</span>
                </TextBox>
              </DropdownItem>

              <DropdownItem>
                <IconBox>
                  <FiMessageCircle size={16} />
                </IconBox>
                <TextBox>
                  <strong>Fale Conosco</strong>
                  <span>Atendimento online</span>
                </TextBox>
              </DropdownItem>
            </AtendimentoDropdown>
          </AtendimentoWrapper>

          {/* MINHA CONTA */}
          <AccountWrapper>
    <FiUser size={22} color="#6A0DAD" />
    <h3>Minha Conta</h3>

      <AccountDropdown>
        {!user ? (
          <>
            <AccountItem href="/pedidos">Meus pedidos</AccountItem>
            <AccountCTA href="/login">
              Entre ou cadastre-se!
            </AccountCTA>
          </>
        ) : (
          <>
            <div className='account-row'>
              <UserWelcome>
                <FiUser size={16} />
                <span>Bem-vindo! {user?.name?.split(' ')[0] ?? ''}</span>
              </UserWelcome>

              <AccountItem href="/conta">
                Minha conta
              </AccountItem>

              <LogoutButton onClick={signOut}>
                <FiLogOut size={16} />
                Sair
              </LogoutButton>
            </div>
          </>
        )}
      </AccountDropdown>
    </AccountWrapper>

          {/* FAVORITOS */} 
        <FavoritesWrapper>
          <FiHeart size={22} color="#6A0DAD" onClick={() => goToAccount('wishlist')}/>

          {totalFavorites > 0 && (
            <FavoritesBadge>{totalFavorites}</FavoritesBadge>
          )}
        <FavoritesDropdown>
          <h4>Meus Favoritos</h4>

          {favorites.length === 0 && <p>Nenhum favorito</p>}

          <div className="favorites-list">
            {favorites.map(game => (
              <FavoriteItem key={game.id}>
                <img src={game.image} alt={game.title} />

                <div>
                  <strong>{game.title}</strong>
                </div>

                <button onClick={() => removeFavorite(game.id)}>
                  ✕
                </button>
              </FavoriteItem>
            ))}
          </div>
        </FavoritesDropdown>
      </FavoritesWrapper>
          {/* CARRINHO */}
        <CartWrapper>
          <Link to="/carrinho">
            <FiShoppingCart size={22} color="#6A0DAD" />
          </Link>

          {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}

          <CartDropdown>
            <h4>Meu Carrinho</h4>


              {items.length === 0 && <p>Carrinho vazio</p>}

              {items.map(item => (
                <CartItem key={item.id}>
                  <div className="cart-item-info">
                    <img src={item.image} alt={item.title} />
                    <strong>{item.title}</strong>
                    <span>
                      {item.quantity}x R$ {item.price}
                    </span>
                  </div>
                </CartItem>
              ))}

            <CartFooter>
              <span>
                Total: <strong>R$ {totalPrice.toFixed(2)}</strong>
              </span>
              <Link to="/carrinho">Ver carrinho</Link>
            </CartFooter>
          </CartDropdown>
        </CartWrapper>
        </BoxOptions>
      </Container>
    );
  }
