import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 24px;

  .emptyCart {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.8;
  }
`;

export const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: linear-gradient(145deg, #140a26, #0f081d);
  border-radius: 20px;
  border: 1px solid rgba(140, 82, 255, 0.15);

  box-shadow:
    0 0 0 1px rgba(140, 82, 255, 0.05),
    0 25px 60px rgba(106, 13, 173, 0.35);

  backdrop-filter: blur(8px);

  display: flex;
  flex-direction: column;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 0 0 1px rgba(140, 82, 255, 0.15),
      0 30px 70px rgba(106, 13, 173, 0.45);
  }
`;

export const CardHeader = styled.div`
  padding: 18px 22px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.purple};

  border-bottom: 1px solid rgba(140, 82, 255, 0.15);
`;

export const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  color: #fff;
  font-size: 14px;

  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  strong {
    font-size: 14px;
    font-weight: 600;
  }

  span {
    opacity: 0.65;
    font-size: 13px;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    opacity: 0.85;
  }

  button {
    margin-top: 18px;
    padding: 16px;
    border-radius: 14px;
    border: none;

    background: linear-gradient(135deg, #8c52ff, #6a0dad);
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.5px;

    cursor: pointer;
    transition: all 0.3s ease;

    box-shadow: 0 10px 30px rgba(140, 82, 255, 0.35);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(140, 82, 255, 0.45);
    }

    &:active {
      transform: scale(0.98);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      box-shadow: none;
    }
  }
`;

export const Highlight = styled.div`
  margin-top: 10px;
  padding: 14px;
  border-radius: 14px;

  background: linear-gradient(
    135deg,
    rgba(140, 82, 255, 0.15),
    rgba(106, 13, 173, 0.1)
  );

  border: 1px solid rgba(140, 82, 255, 0.25);

  font-weight: 600;
  font-size: 13px;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.purple};
`;

export const TotalBox = styled.div`
  margin-top: 12px;
  padding: 18px;
  border-radius: 16px;

  background: linear-gradient(
    135deg,
    rgba(140, 82, 255, 0.12),
    rgba(106, 13, 173, 0.08)
  );

  border: 1px solid rgba(140, 82, 255, 0.25);

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
  color: #fff;

  box-shadow: 0 10px 30px rgba(140, 82, 255, 0.25);
`;

export const FinalizeButton = styled.button`
  margin-top: 18px;
  padding: 16px;
  border-radius: 16px;
  border: none;

  background: linear-gradient(135deg, #9f5cff, #6a0dad);
  color: #fff;

  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.5px;

  cursor: pointer;
  transition: all 0.3s ease;

  box-shadow: 0 15px 40px rgba(140, 82, 255, 0.35);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 50px rgba(140, 82, 255, 0.45);
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }
`;
