// src/pages/Register/index.tsx
import { Link } from 'react-router-dom';
import { Container, Title, Logo, Input, Button } from './styles';
import { useRegister } from '../../../hooks/auth/useRegister';

export function Register() {
  const {
    name,
    email,
    password,
    confirmPassword,
    loading,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleRegister,
  } = useRegister();

  return (
    <Container>
      <Logo>
        <Link to='/'><img src="/icon.png" alt="Comeback Store" /></Link>
      </Logo>

      <Title>
        <h1>Crie sua Conta</h1>
        <span>Já tem uma conta? <Link to="/login">Login</Link></span>
      </Title>

      <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Input type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

      <Button onClick={handleRegister} disabled={loading}>
        {loading ? 'Criando...' : 'Criar Conta'}
      </Button>
    </Container>
  );
}
