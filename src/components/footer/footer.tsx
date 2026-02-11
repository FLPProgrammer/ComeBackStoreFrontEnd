import { FooterContainer, FooterGrid, Column, Title, Text, List, ListItem, SocialIcons, BottomBar} from "./styles";


export function Footer() {
    return (
        <FooterContainer>
            <FooterGrid>
                <Column>
                    <Title>Sobre a Loja</Title>
                    <Text>
                        Bem-vindo à nossa loja, aqui você encontra jogos de Xbox One e
                        Xbox Series X|S com as melhores ofertas. Desde 2025 oferecendo
                        jogos digitais com segurança e suporte de qualidade.
                    </Text>
                </Column>

                <Column>
                <Title>Institucional</Title>
                <List>
                    <ListItem>Fale Conosco</ListItem>
                    <ListItem>Dúvidas Frequentes (FAQ)</ListItem>
                    <ListItem>Meios de Pagamento e frete</ListItem>
                    <ListItem>Política de Privacidade</ListItem>
                    <ListItem>Trocas e Devoluções</ListItem>
                </List>
                </Column>

                <Column>
                    <Title>Contato</Title>
                    <List>
                        <ListItem>📞 (42) 99903-3921</ListItem>
                        <ListItem>💬 WhatsApp</ListItem>
                        <ListItem>✉️ lplpfwr@gmail.com</ListItem>
                    </List>
                </Column>

                <Column>
                    <Title>Social</Title>
                    <SocialIcons>
                        <button>▶</button>
                        <button>📷</button>
                    </SocialIcons>
                </Column>
            </FooterGrid>
            <BottomBar>
                 © {new Date().getFullYear()} • Comeback Store — Todos os direitos reservados
            </BottomBar>
        </FooterContainer>
    )
}