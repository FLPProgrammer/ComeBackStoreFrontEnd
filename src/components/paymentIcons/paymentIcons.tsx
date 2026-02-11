import { IconsWrapper } from './styles';
import { FaCcVisa, FaCcMastercard, FaCcAmex} from 'react-icons/fa';
import { SiPix, SiMercadopago } from 'react-icons/si';

export function PaymentIcons() {
    return (
        <IconsWrapper>
          <FaCcVisa aria-label="Visa" title="Visa" />
          <FaCcMastercard aria-label="Mastercard" title="Mastercard" />
          <FaCcAmex aria-label="American Express" title="American Express" />
          <SiPix aria-label="Pix" title="Pix" />
          <SiMercadopago aria-label="Mercado Pago" title="Mercado Pago" />
        </IconsWrapper>
    )
}