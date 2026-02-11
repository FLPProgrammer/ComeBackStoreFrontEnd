import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { CarrouselContainer, BannerImage} from "./styles";

const images = [
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
  "/banner4.png",
  "/banner5.png",
];

export function CarrouselBanner() {
  return (
    <CarrouselContainer>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        slidesPerView={1}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <BannerImage src={img} />

          </SwiperSlide>
        ))}
      </Swiper>
    </CarrouselContainer>
  );
}
