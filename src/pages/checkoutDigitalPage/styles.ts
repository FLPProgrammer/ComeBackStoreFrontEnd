import styled from 'styled-components';


export const Container = styled.div`
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;

    .emptyCart {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        color: ${({ theme }) => theme.colors.white};
    }

`;

export const CheckoutGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.div`
    background: #120a22;
    border-radius: 16px;
    border: 1px solid #2a1b45;

    box-shadow: 0 20px 40px rgba(106, 13, 173, 0.25);

    display: flex;
    flex-direction: column;
`;

export const CardHeader = styled.div`
    padding: 16px 20px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.purple};
    border-bottom: 1px solid #2a1b45;
`;

export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  color: #fff;
  font-size: 14px;

  .product {
    display: flex;
    gap: 20px;
  }

  strong {
    font-size: 14px;
  }

  span {
    opacity: 0.7;
    font-size: 13px;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  button {
    margin-top: 12px;
    padding: 14px;
    border-radius: 12px;
    border: none;

    background: linear-gradient(135deg, #9f5cff, #6a0dad);
    color: #fff;
    font-weight: 700;
    cursor: pointer;

    transition: 0.25s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(159, 92, 255, 0.35);
    }
  }
`;

export const Highlight = styled.div`
    margin-top: 8px;
    padding: 12px;
    border-radius: 10px;

    background: rgba(159, 92, 255, 0.12);
    border: 1px solid rgba(159, 92, 255, 0.25);

    font-weight: 700;
    color: ${({ theme }) => theme.colors.purple};
`