import { Link } from "react-router-dom";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { categories } from "../../data/categories";

import "swiper/css";
import "swiper/css/navigation";

export function FeaturedCategories() {
  return (
    <Container id="categories">
      <h1>Categorias em Destaque</h1>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.slug}>
            <Link to={`/categoria/${cat.slug}`} className="categoryLink">
              <div className="categoryCard">
                <div className="imageWrapper">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <span>{cat.name}</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
