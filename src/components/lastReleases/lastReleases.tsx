import { Container } from "./styles";
import { GameCard } from "../gameCard/gameCard";
import { games } from "../../data/games";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export function LastReleases() {
  return (
    <Container id="lancamentos">
      <h1>Lançamentos</h1>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            <GameCard game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
