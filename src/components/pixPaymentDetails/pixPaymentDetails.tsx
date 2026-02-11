import { Container } from './styles'
import { IPaymentProps } from '../../interfaces/interfaces'

export function PixPaymentDetails({total}: IPaymentProps) {
    const discount = total * 0.05;
    const finalValue = total - discount;

    return (
        <Container>
            <h3>Pagamento via Pix</h3>
            <p>Desconto de 5% aplicado</p>
            <strong>
                Valor: R$ {finalValue.toFixed(2)}
            </strong>
        </Container>
    );
}