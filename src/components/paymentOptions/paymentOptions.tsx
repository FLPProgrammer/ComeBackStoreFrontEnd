import { useState } from 'react';
import { FaPix } from 'react-icons/fa6';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { IPaymentProps } from '../../interfaces/interfaces';

import {
    Options,
    Option,
    Radio,
    OptionsContent,
    Icons,
    Discount,
    CardFlag,
    Details
} from './styles';

import { CardPaymentDetails } from '../../components/cardPaymentDetails/cardPaymentDetails';
import { PixPaymentDetails } from '../../components/pixPaymentDetails/pixPaymentDetails'

export function PaymentOptions({ total }: IPaymentProps) {
    const [method, setMethod] = useState<'card' | 'pix'>('card');

    return (
    <Options>
      {/* CARTÃO */}
      <Option active={method === 'card'} onClick={() => setMethod('card')}>
        <Radio checked={method === 'card'} />
        <OptionsContent>
          <Icons>
            <FaCcMastercard />
            <FaCcVisa />
            <CardFlag>Elo</CardFlag>
          </Icons>
        </OptionsContent>
      </Option>

      {method === 'card' && (
        <Details>
          <CardPaymentDetails total={total} />
        </Details>
      )}

      {/* PIX */}
      <Option active={method === 'pix'} onClick={() => setMethod('pix')}>
        <Radio checked={method === 'pix'} />
        <OptionsContent>
          <Icons>
            <FaPix />
          </Icons>
          <Discount>Desconto 5%</Discount>
        </OptionsContent>
      </Option>

      {method === 'pix' && (
        <Details>
          <PixPaymentDetails total={total} />
        </Details>
      )}
    </Options>
  );
}

