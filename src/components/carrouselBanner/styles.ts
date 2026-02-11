import styled from 'styled-components';

export const CarrouselContainer = styled.div`
  width: 100%;
  
  height: auto; 
  
  position: relative;
  overflow: hidden;
  z-index: 700;
  
  padding-top: 0;
  padding-bottom: 0;
  line-height: 0;

  .swiper {
    width: 100%;
    height: 100%;
  }

  
  .swiper-button-prev,
  .swiper-button-next {
    width: 44px;
    height: 44px;
    padding: 5px;
    color: ${({ theme }) => theme.colors.purple};
    border-radius: 50%;
    backdrop-filter: blur(4px);
    transition: 0.25s;
    opacity: 0;

    &::after {
      font-size: 20px; 
      font-weight: bold;
    }

    &:hover {
      background: rgba(106, 13, 173, 0.18);
      transform: scale(1.1);
    }
  }

  .swiper-button-prev {
    left: -60px;
  }

  .swiper-button-next {
    right: -60px;
  }

  &:hover {
    .swiper-button-prev {
      left: 24px;
      opacity: 1;
    }

    .swiper-button-next {
      right: 24px;
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    .swiper-button-prev,
    .swiper-button-next {
      width: 40px;
      height: 40px;

      &::after {
        font-size: 18px;
      }
    }

    .swiper-button-prev {
      left: -50px;
    }

    .swiper-button-next {
      right: -50px;
    }

    &:hover {
      .swiper-button-prev {
        left: 20px;
      }

      .swiper-button-next {
        right: 20px;
      }
    }
  }

  @media (max-width: 768px) {
    .swiper-button-prev,
    .swiper-button-next {
      width: 36px;
      height: 36px;
      opacity: 0.7;

      &::after {
        font-size: 16px;
      }
    }

    .swiper-button-prev {
      left: -45px;
    }

    .swiper-button-next {
      right: -45px;
    }

    &:hover {
      .swiper-button-prev {
        left: 16px;
      }

      .swiper-button-next {
        right: 16px;
      }
    }
  }

  @media (max-width: 480px) {
    .swiper-button-prev,
    .swiper-button-next {
      width: 32px;
      height: 32px;
      opacity: 0.6;

      &::after {
        font-size: 14px;
      }
    }

    .swiper-button-prev {
      left: -40px;
    }

    .swiper-button-next {
      right: -40px;
    }

    &:hover {
      .swiper-button-prev {
        left: 12px;
      }

      .swiper-button-next {
        right: 12px;
      }
    }
  }


  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.colors.white};
    opacity: 0.5;
    transition: 0.3s;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.purple};
    opacity: 1;
    transform: scale(1.2);
  }
`;

export const BannerImage = styled.img`
  width: 100%;

  height: 100%; 
  max-height: 600px;

  object-fit: cover; 
  object-position: center;
  display: block;

  @media (max-width: 1024px) {
    max-height: 500px;
  }

  @media (max-width: 768px) {
    max-height: 400px;
  }

  @media (max-width: 480px) {
    max-height: 300px;
  }
`;