import {
    Container,
    Content,
    Title,
    Description,
    Character,
    BackButton,
} from './styles';
import { Link } from 'react-router-dom';


export function XboxOneComingSoon() {
    return (
        <Container>
            <Content>
                <Character src="/character-game.png" alt="Personagem gamer" />

                <Title>Oops! 🎮</Title>

                <Description>
                    Desculpa, ainda não possuímos mídias disponíveis para <strong>Xbox One</strong>.
                    <br />
                    Estamos trabalhando nisso e em breve teremos novidades
                </Description>

                <BackButton as={Link} to="/">
                    Voltar para a loja
                </BackButton>
            </Content>
        </Container>
    )
}