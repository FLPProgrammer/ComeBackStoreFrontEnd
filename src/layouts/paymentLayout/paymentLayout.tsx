import { ScrollToTop } from '../../components/scrollToTop/scrollToTop'
import { Outlet } from 'react-router-dom';
import { HeaderPayment } from '../../components/headerPayment/headerPayment';
import { FooterPayment } from '../../components/footerPayment/footerPayment';
import { Container, Content } from './styles';

export function PaymentLayout() {
    return (
        <Container>
            <ScrollToTop/>
            
             <HeaderPayment/>
            
            <Content>
                <Outlet />
            </Content>

            <FooterPayment/>
        </Container>
    )
}