import { useSearchParams } from 'react-router-dom';
import { ContainerForm, Title, Form, Input, Button } from './styles'
import { useResetPassword } from '../../../hooks/useResetPassword';

export function ResetPassword() {

    const [searchParams] = useSearchParams();
    const token = searchParams.get('token') || '';

    const {
        password,
        setPassword,
        handleSubmit,
        loading,
        error
    } = useResetPassword(token)

    return (
         <ContainerForm>
        <Form onSubmit={handleSubmit}>
            <Title>Redefinir Senha</Title>
            
            <Input
                type="password"
                placeholder="Nova senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && <span>{error.message}</span>}

            <Button type="submit">
                {loading ? 'Salvando...' : 'Redefinir senha'}
            </Button>
        </Form>
    </ContainerForm>
    );
}