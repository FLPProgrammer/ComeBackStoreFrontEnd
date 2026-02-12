import { 
  Container, 
  CheckoutGrid, 
  Card, 
  CardHeader, 
  CardContent, 
  Highlight,
  TotalBox,
  FinalizeButton
} from './styles';


import { FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../contexts/cart/cartContext';
import { useCheckout } from '../../hooks/useCheckout';

export function CheckoutDigitalPage() {
  const { totalPrice, items } = useCart();
  const { handleCheckout, loading, error } = useCheckout();

  if (items.length === 0) {
    return (
      <Container>
        <div className='emptyCart'>
          <FaShoppingCart size={60} />
          <p>Seu carrinho está vazio!</p>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <CheckoutGrid>
        {/* PRODUTOS */}
        <Card>
          <CardHeader>PRODUTOS</CardHeader>
          <CardContent>
            {items.map(item => (
              <div key={item.id} className='product'>
                <strong>{item.title}</strong>
                <span>
                  {item.quantity}x R$ {item.price}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* ENTREGA */}
        <Card>
          <CardHeader>ENTREGA DIGITAL</CardHeader>
          <CardContent>
            <p>
              Após a confirmação do pagamento, você receberá as instruções via <strong>Whatsapp</strong>
            </p>

            <Highlight>
              <FaWhatsapp /> Envio via Whatsapp
            </Highlight>

            <ul>
              <li>✔ Envio imediato</li>
              <li>✔ Código original</li>
              <li>✔ Suporte pós-venda</li>
            </ul>
          </CardContent>
        </Card>

        {/* PAGAMENTO */}
        <Card>
          <CardHeader>RESUMO DO PAGAMENTO</CardHeader>
          <CardContent>

            <TotalBox>
              <span>Total</span>
              <strong>R$ {totalPrice.toFixed(2)}</strong>
            </TotalBox>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            <FinalizeButton 
              onClick={() => handleCheckout(items)}
              disabled={loading}
            >
              {loading ? 'Processando...' : 'Finalizar Compra'}
            </FinalizeButton>


          </CardContent>
        </Card>
      </CheckoutGrid>
    </Container>
  );
}