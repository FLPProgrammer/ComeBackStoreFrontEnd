import { useParams } from "react-router-dom";
import { useFilteredGames } from "../../hooks/useFilteredGames";
import { GameCard } from "../../components/gameCard/gameCard";
import { Container, Header, Grid } from "./styles";
import { ICategoryPageProps } from "../../interfaces/interfaces";

export function CategoryPage({ games }: ICategoryPageProps) {
    
  const { slug } = useParams<{ slug: string }>();

  const selectedCategory = slug ?? "all";

  const { filteredGames, title } = useFilteredGames({
    games,
    selectedCategory,
  });

  return (
    <Container>
      <Header>
        <h1>{title}</h1>
        <span>{filteredGames.length} jogos encontrados</span>
      </Header>

      <Grid>
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Grid>
    </Container>
  );
}
