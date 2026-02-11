import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;

  h1 {
    font-size: 26px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 32px;
    text-align: center;

    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 48%;
      width: 48px;
      height: 4px;
      border-radius: 4px;
      background: ${({ theme }) => theme.colors.purple};
    }
  }

  .swiper {
    padding-bottom: 40px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    padding: 8px 0;
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

        &:hover {
          background:  rgba(106, 13, 173, 0.18);
          transform: scale(1.1);
        }

    
    }

  @media (max-width: 1024px) {
    padding: 48px 16px;

    h1 {
      font-size: 24px;
      margin-bottom: 28px;
    }

    .swiper-button-prev,
    .swiper-button-next {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 768px) {
    padding: 32px 12px;

    h1 {
      font-size: 20px;
      margin-bottom: 24px;

      &::after {
        width: 40px;
        left: 47%;
      }
    }

    .swiper {
      padding-bottom: 32px;
    }

    .swiper-button-prev,
    .swiper-button-next {
      width: 36px;
      height: 36px;
    }
  }

  @media (max-width: 480px) {
    padding: 24px 10px;

    h1 {
      font-size: 18px;
      margin-bottom: 20px;

      &::after {
        width: 32px;
        left: 46%;
      }
    }

    .swiper {
      padding-bottom: 24px;
    }

    .swiper-button-prev,
    .swiper-button-next {
      width: 32px;
      height: 32px;
    }
  }

`;
