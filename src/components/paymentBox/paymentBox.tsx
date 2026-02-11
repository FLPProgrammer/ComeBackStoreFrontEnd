import {
  Container,
  Methods,
  MethodRow,
  Installments,
  Divider,
  FreightBox,
  FreightInput,
  FreightButton
} from './styles';

import { IPaymentBoxProps } from '../../interfaces/interfaces';
import { PaymentIcons } from '../paymentIcons/paymentIcons';
import { useFreight } from '../../hooks/useFreight';

export function PaymentBox({
  price,
  installments,
  installmentValue
}: IPaymentBoxProps) {

  const {
    cep,
    setCep,
    freight,
    loading,
    error,
    handleFreight,
  } = useFreight();

  return (
    <Container>
      <Methods>
        <MethodRow>
          <strong>Cartão de crédito</strong>
          <span>{installments}x de R${installmentValue} sem juros</span>
        </MethodRow>

        <Installments>
          <PaymentIcons />
          <p>1x de R$ {price} sem juros</p>
          <p>2x de R$ {(Number(price) / 2).toFixed(2)}</p>
          <p>3x de R$ {installmentValue}</p>
        </Installments>

        <Divider />
      </Methods>

      <Divider />

      <FreightBox>
        <strong>Calcule o frete</strong>

        <div>
          <FreightInput
            placeholder="Digite seu CEP"
            value={cep}
            onChange={e => setCep(e.target.value)}
          />

          <FreightButton
            type="button"
            onClick={handleFreight}
            disabled={loading}
          >
            {loading ? '...' : 'OK'}
          </FreightButton>
        </div>

        {/* feedback visual simples */}
        {freight !== null && (
          <p>Frete: <strong>R$ {freight.toFixed(2)}</strong></p>
        )}

        {error && (
          <p style={{ color: '#d11a2a', fontSize: 12 }}>
            {error}
          </p>
        )}
      </FreightBox>
    </Container>
  );
}
