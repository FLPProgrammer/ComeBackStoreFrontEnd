import { Container, CheckoutGrid, Card, CardHeader, CardContent, Highlight } from './styles';
import { PaymentOptions } from '../../components/paymentOptions/paymentOptions';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../../contexts/cart/cartContext';
import { FaShoppingCart } from 'react-icons/fa' 

export function CheckoutDigitalPage() {
    const { totalPrice, items } = useCart();

    if(items.length === 0) {
        return (
            <Container>
                <div className='emptyCart'>
                    <FaShoppingCart size={60}/>
                    <p>Seu carrinho está vazio!</p>
                </div>
            </Container>
        )
    }


    return (
        <Container>
            <CheckoutGrid>
                <Card>
                    <CardHeader>PRODUTO</CardHeader>
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
                
                <Card>
                    <CardHeader>ENTREGA DIGITAL</CardHeader>
                    <CardContent>
                        <p>
                            Após a confirmação do pagamento, você receberá as instruções via <strong>Whatsapp</strong>
                        </p>

                        <Highlight>
                            <FaWhatsapp/> Envio via Whatsapp
                        </Highlight>

                        <ul>
                            <li>✔ Envio imediato</li>
                            <li>✔ Código original</li>
                            <li>✔ Suporte pós-venda</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>PAGAMENTO</CardHeader>
                    <CardContent>
                        <PaymentOptions total={totalPrice}/>


                        <button>Finalizar Compra</button>
                    </CardContent>
                </Card>
            </CheckoutGrid>
        </Container>
    )
}