import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 80px auto;
  padding: 0 20px;

  h1 {
    font-size: 24px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: underline ${({ theme }) => theme.colors.purple};
  }

  .swiper {
    width: 100%;
    padding-bottom: 40px;
  }

  .swiper-wrapper {
    align-items: stretch;
  }

  .swiper-slide {
    height: auto;
    display: flex;
  }

  @media (max-width: 1024px) {
    margin: 60px auto;
    padding: 0 16px;

    h1 {
      font-size: 22px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 768px) {
    margin: 40px auto;
    padding: 0 12px;

    h1 {
      font-size: 20px;
      margin-bottom: 18px;
    }

    .swiper {
      padding-bottom: 32px;
    }
  }

  @media (max-width: 480px) {
    margin: 32px auto;
    padding: 0 10px;

    h1 {
      font-size: 18px;
      margin-bottom: 16px;
    }

    .swiper {
      padding-bottom: 24px;
    }
  }
`;
