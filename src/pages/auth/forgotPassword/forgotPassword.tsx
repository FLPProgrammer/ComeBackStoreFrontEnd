import { Link } from 'react-router-dom';
import { Container, Logo, Title, Input, Button, Footer } from './styles';
import { useForgotPassword } from '../../../hooks/useForgotPassword';


export function ForgotPassword() {

    const { email, setEmail, loading, submit, error} = useForgotPassword();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        submit();
    }

    return (
        <Container as="form" onSubmit={handleSubmit}>
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
            

            <Input 
            type='email' 
            placeholder='Digite seu email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            
                {error && (
                    <span style={{color: 'red' }}>
                        {error.message}
                    </span>
                )}


            <Button>
                {loading? 'Enviando...' : 'Enviar link de recuperação'}
            </Button>

            <Footer>
                <Link to="/login">Voltar para o login</Link>
            </Footer>
        </Container>
    )
}