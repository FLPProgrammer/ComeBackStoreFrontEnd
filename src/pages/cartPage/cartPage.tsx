import {
  Container,
  CartHeader,
  CartTable,
  ProductInfo,
  QuantityControl,
  Price,
  RemoveButton,
  Summary,
  Actions,
} from './styles';

import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../../contexts/cart/cartContext';
import { Link } from 'react-router-dom';

export function CartPage() {
  const {
    items,
    increase,
    decrease,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <Container>
      <CartHeader>
        <h1>Carrinho</h1>
        <span>Clique em finalizar compra para efetuar o seu pedido</span>
      </CartHeader>

      {items.length === 0 ? (
        <p style={{ marginTop: 40, marginLeft: 30 }}>Seu carrinho está vazio 🛒</p>
      ) : (
        <>
          <CartTable>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Excluir</th>
              </tr>
            </thead>

            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>
                    <ProductInfo>
                      <img src={item.image} alt={item.title} />
                      <div>
                        <strong>{item.title}</strong>
                        <span>{item.platform}</span>
                        <small>Estoque: Disponível</small>
                      </div>
                    </ProductInfo>
                  </td>

                  <td>
                    <QuantityControl>
                      <button onClick={() => decrease(item.id)}>
                        <FiMinus />
                      </button>

                      <input type="text" value={item.quantity} readOnly />

                      <button onClick={() => increase(item.id)}>
                        <FiPlus />
                      </button>
                    </QuantityControl>
                  </td>

                  <td>
                    <Price>
                      R${' '}
                      {(
                        Number(item.price.replace(',', '.')) *
                        item.quantity
                      ).toFixed(2)}
                    </Price>
                  </td>

                  <td>
                    <RemoveButton onClick={() => removeFromCart(item.id)}>
                      <FiTrash2 />
                    </RemoveButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </CartTable>

          <Summary>
            <div>
              <span>Subtotal</span>
              <strong>R$ {totalPrice.toFixed(2)}</strong>
            </div>

            <div>
              <span>Total</span>
              <strong className="total">R$ {totalPrice.toFixed(2)}</strong>
            </div>
          </Summary>

          <Actions>
            <Link to="/">
              <button className="outline">Continuar comprando</button>
            </Link>

            <Link to="/checkout">
              <button className="primary">Finalizar compra</button>
            </Link>
          </Actions>
        </>
      )}
    </Container>
  );
}
