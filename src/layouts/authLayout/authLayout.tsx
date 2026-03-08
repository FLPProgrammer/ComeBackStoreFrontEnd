import { ScrollToTop } from '../../components/scrollToTop/scrollToTop'
import { Outlet } from 'react-router-dom';
import { Container } from './styles'



export function AuthLayout() {
    return (
        <Container>
            <ScrollToTop />
            
            <Outlet />
        </Container>
    )
}