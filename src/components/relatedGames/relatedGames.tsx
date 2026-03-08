import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";

import { Container } from './styles';
import { GameCard } from '../gameCard/gameCard';
import { IRelatedGamesProps } from '../../interfaces/interfaces';
import { useRelatedGames } from '../../hooks/useRelatedGames';


export function RelatedGames({ game }: IRelatedGamesProps) {
    const relatedGames = useRelatedGames({ currentGame: game});
    
    return (
        <Container>
            <h1>Produtos Relacionados</h1>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={24}
                slidesPerView={4}
                preventClicks={true}
                preventClicksPropagation={true}
                slideToClickedSlide={false}
                breakpoints={{
                    320: { slidesPerView: 1.2 },
                    640: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 4 },
                }}
            >
                 {relatedGames.map((relatedGame) => (
                    <SwiperSlide key={relatedGame.id}>
                        <GameCard game={relatedGame} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container> 
    )
}