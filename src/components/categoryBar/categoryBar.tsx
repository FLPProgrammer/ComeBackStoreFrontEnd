import { Container, Menu, MenuItem, Dropdown, DropdownColumn, CategoryLink } from './styles';
import { useHideOnScroll } from '../../hooks/useHideOnScroll';


export function CategoryBar() {

  const { hidden } = useHideOnScroll({
    startHideAt: 160,
    threshold: 10
  });



  return (
    <Container hidden={hidden}>
      <Menu>
        <MenuItem>
          <CategoryLink to="/#categories">
            CATEGORIAS 
          </CategoryLink>
          <Dropdown>
            <DropdownColumn>
              <li>
                <CategoryLink to="/categoria/acao-e-aventura">
                  AÇÃO E AVENTURA
                </CategoryLink>
              </li>
              <li>
                <CategoryLink to="/categoria/luta">
                  LUTA
                </CategoryLink>
              </li>
              <li>
                <CategoryLink to="/categoria/plataforma">
                  PLATAFORMA
                </CategoryLink>
              </li>
            </DropdownColumn>

            <DropdownColumn>
              <li>
                <CategoryLink to="/categoria/corrida">
                  CORRIDA
                </CategoryLink>
              </li>
              <li>
                <CategoryLink to="/categoria/esporte">
                  ESPORTE
                </CategoryLink>
              </li>
              <li>
                <CategoryLink to="/categoria/rpg">
                  RPG
                </CategoryLink>
              </li>
            </DropdownColumn>

            <DropdownColumn>
              <li>
                <CategoryLink to="/categoria/estrategia">
                  ESTRATÉGIA
                </CategoryLink>
              </li>
              <li>
                <CategoryLink to="/categoria/simulacao">
                  SIMULAÇÃO
                </CategoryLink>
              </li>
              <li>
                <CategoryLink to="/categoria/terror">
                  TERROR
                </CategoryLink>
              </li>
            </DropdownColumn>

            <DropdownColumn>
              <li>
                <CategoryLink to="/categoria/jogos-de-tiro">
                  JOGOS DE TIRO
                </CategoryLink>
              </li>
              <li>
                <CategoryLink to="/categoria/souls-like">
                  SOULS LIKE
                </CategoryLink>
              </li>
            </DropdownColumn>
          </Dropdown>
        </MenuItem>

        <MenuItem>
          TODOS OS JOGOS XBOX
          <Dropdown small>
            <DropdownColumn>
              <li>
                <CategoryLink to="/#lancamentos">
                  LANÇAMENTOS
                </CategoryLink>
              </li>
              <li>
                <CategoryLink to="/allCategoryPage/mais-vendidos">
                  MAIS VENDIDOS
                </CategoryLink>
              </li>
            </DropdownColumn>
          </Dropdown>
        </MenuItem>

        <MenuItem>
           <CategoryLink to="/xbox-one">
              XBOX ONE
           </CategoryLink>
        </MenuItem>
        <MenuItem>
          <CategoryLink to="/categoria/todos?platform=series">
            XBOX SERIES S/X
          </CategoryLink>
        </MenuItem>
      </Menu>
    </Container>
  );
}