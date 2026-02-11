import { Link } from 'react-router-dom';
import { Container, Logo, Title, Input, Button, Footer } from './styles';


export function ForgotPassword() {
    return (
        <Container>
            <Logo>
                <Link to='/'>
                    <img src="/icon.png" alt="Logo" />
                </Link>
            </Logo>

            <Title>
                <h1>Esqueceu sua senha?</h1>
                 <span>
                    Informe seu email e enviaremos um link para redefinir a sua senha
                </span>
            </Title>
            

            <Input type='email' placeholder='Digite seu email'/>
            
            <Button>Enviar link de recuperação</Button>

            <Footer>
                <Link to="/login">Voltar para o login</Link>
            </Footer>
        </Container>
    )
}