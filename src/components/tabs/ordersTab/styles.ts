import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const OrderCard = styled.div`
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 20px;
  background: #fff;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  p {
    font-size: 14px;
    color: #374151;

    strong {
      display: block;
      color: #111827;
      margin-bottom: 4px;
    }
  }

  span.status {
    font-weight: 600;
    color: #16A34A;
  }

  button {
    grid-column: span 4;
    margin-top: 12px;

    padding: 10px;
    background: #6D28D9;
    color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;

    button {
      grid-column: span 2;
    }
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 16px;
    gap: 12px;

    p {
      font-size: 13px;
    }

    button {
      grid-column: span 1;
      margin-top: 8px;
      padding: 8px;
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: 10px;

    p {
      font-size: 12px;
    }

    button {
      font-size: 12px;
      padding: 8px;
    }
  }
`;
