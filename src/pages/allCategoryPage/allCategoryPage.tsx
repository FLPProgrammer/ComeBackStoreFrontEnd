import { Container, Sidebar, Content, ContentHeader, Grid } from "./styles";
import { useCategory } from "../../hooks/useCategory";
import { CategoryMenu } from "../../components/categoryMenu/categoryMenu";
import { GameCard } from "../../components/gameCard/gameCard";


export function AllCategoryPage() {

    const { games, currentCategory } = useCategory();

    return (
        <Container>
            <Sidebar>
                <CategoryMenu />
            </Sidebar>

            <Content>
                <ContentHeader>
                    <h1>{currentCategory?.name.toUpperCase()}</h1>
                </ContentHeader>

                            <Grid>
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </Grid>
            </Content>
        </Container>
    );
}