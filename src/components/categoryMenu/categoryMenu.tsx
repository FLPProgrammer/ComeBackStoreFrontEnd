import { useParams } from "react-router-dom";
import { categories } from "../../data/categories";
import { Container, Title, List, Item, StyledLink } from "./styles";

export function CategoryMenu() {
  const { slug } = useParams();

  return (
    <Container>
      <Title>
        CATEGORIAS
        <span>▾</span>
      </Title>

      <List>
        {categories.map(category => (
         
        <Item key={category.slug} active={slug === category.slug}>
        <StyledLink to={`/categoria/${category.slug}`}>
            {category.name.toUpperCase()}
        </StyledLink>
        </Item>
        ))}
      </List>
    </Container>
  );
}
