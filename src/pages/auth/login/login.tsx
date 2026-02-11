// src/pages/Login/index.tsx
import { Link } from 'react-router-dom';
import { Container, Logo, Title, Input, Button, Footer } from './styles';
import { useLogin } from '../../../hooks/auth/useLogin';

export function Login() {
  const {
    email,
    password,
    loading,
    setEmail,
    setPassword,
    handleLogin,
  } = useLogin();

  return (
    <Container>
      <Logo>
        <Link to='/'><img src="/icon.png" alt="Comeback Store" /></Link>
      </Logo>

      <Title>
        <h1>Bem-vindo de volta!</h1>
        <span>Não tem uma conta ainda? <Link to="/register">Sign Up</Link></span>
      </Title>

      <Input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={handleLogin} disabled={loading}>
        {loading ? 'Entrando...' : 'Login'}
      </Button>

      <Footer>
        <Link to="/forgot-password">Esqueceu sua senha?</Link>
      </Footer>
    </Container>
  );
}
