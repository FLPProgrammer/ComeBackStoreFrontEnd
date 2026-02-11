import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 16px;

  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 32px;

  .main {
    background: #fff;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  }

  @media (max-width: 1024px) {
    gap: 24px;
    padding: 24px 12px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px 12px;

    .main {
      padding: 16px;
    }
  }

  @media (max-width: 480px) {
    padding: 16px 10px;
    gap: 16px;

    .main {
      padding: 12px;
    }
  }
`;
