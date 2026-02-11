import { Container, BoxIcon, BoxInfo, BoxInfoItem } from './styles';
import { Link } from 'react-router-dom';
import { FiMessageCircle } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export function HeaderPayment() {
    return (
        <Container>
            <BoxIcon>
                <Link to='/'>
                    <img src="/icon.png" alt="" />
                </Link>
            </BoxIcon>

            <BoxInfo>
                <FiMessageCircle size={20} color='white'/>
                <BoxInfoItem>
                    <p>Dúvidas?</p>
                    <strong>Fale Conosco</strong>
                </BoxInfoItem>
            </BoxInfo>

            <BoxInfo>
                <FiPhone size={20} color='white'/>
                <BoxInfoItem>
                    <p>Atendimento</p>
                    <strong>(42) 99903-3921</strong>
                </BoxInfoItem>
            </BoxInfo>

            <BoxInfo>
                <FaWhatsapp size={20} color='white'/>
                <BoxInfoItem>
                    <p>Whatsapp</p>
                    <strong>(42) 99903-3921</strong>
                </BoxInfoItem>
            </BoxInfo>
        </Container>
    )
}