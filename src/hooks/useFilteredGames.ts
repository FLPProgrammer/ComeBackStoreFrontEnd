import { IUseFilteredGamesParams } from '../interfaces/interfaces';


export function useFilteredGames({games, selectedCategory}: IUseFilteredGamesParams) {

    const filteredGames = selectedCategory === "all" ? games : games.filter(game => game.category === selectedCategory);

    const title = selectedCategory  === "all" ? "Todos os jogos" : selectedCategory.replace("-", " ").toUpperCase();

    return { 
        filteredGames, title, total: filteredGames.length,
 } 
}


