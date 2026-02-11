import {
    Container,
    Content,
    Title,
    Description,
    Character,
    BackButton,
} from './styles';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
    return (
        <Container>
            <Content>
                <Character src="/character-game.png" alt="Character" />

                <Title>Oops! Página não encontrada 🎮</Title>

                <Description>
                    Parece que você tentou acessar uma rota que não existe na <strong>Comeback Store</strong>
                    <br />
                    Talvez o link esteja incorreto ou a página foi removida.
                </Description>

                <BackButton as={Link} to="/">
                    Voltar para a loja
                </BackButton>
            </Content>
        </Container>
    )
};