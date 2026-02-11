import { useParams } from 'react-router-dom';
import { games } from '../data/games';

export function UseProduct() {
    const { id } = useParams();

    const productId = Number(id);

    const game = games.find(game => game.id === productId);

    return {
        game,
    };
}