import { Container, BoxInformation } from './styles';
import { FaCreditCard, FaLock, FaWhatsapp, FaDollarSign } from 'react-icons/fa';

export function InfoBar() {
    return (
        <Container>
            <BoxInformation>
                <FaCreditCard size={20}/>
                <h3>ACEITAMOS CARTÃO</h3>
            </BoxInformation>
            <BoxInformation>
                <FaDollarSign size={20}/>
                <h3>5% DE DESCONTO NO PIX</h3>
            </BoxInformation>
            <BoxInformation>
                <FaLock size={20}/>
                <h3>LOJA 100% SEGURA</h3>
            </BoxInformation>
            <BoxInformation>
                <FaWhatsapp size={20}/>
                <h3>ENVIO DIRETO NO WHATSAPP</h3>
            </BoxInformation>
        </Container>
    )
}