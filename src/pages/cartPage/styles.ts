import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 160px auto 40px;
    padding: 0 20px;

    @media (max-width: 1024px) {
      margin: 140px auto 32px;
      padding: 0 16px;
    }

    @media (max-width: 768px) {
      margin: 120px auto 24px;
      padding: 0 12px;
    }

    @media (max-width: 480px) {
      margin: 100px auto 20px;
      padding: 0 10px;
    }
`;

export const CartHeader = styled.div`
    margin: 32px;

    h1 {
        font-size: 28px;
        color: ${({ theme }) => theme.colors.purple};
    }

    span {
        font-size: 14px;
        color: #777;
    }

    @media (max-width: 1024px) {
      margin: 24px;
      
      h1 {
        font-size: 24px;
      }

      span {
        font-size: 13px;
      }
    }

    @media (max-width: 768px) {
      margin: 20px;
      
      h1 {
        font-size: 20px;
      }

      span {
        font-size: 12px;
      }
    }

    @media (max-width: 480px) {
      margin: 16px;
      
      h1 {
        font-size: 18px;
      }

      span {
        font-size: 11px;
      }
    }
`;

export const CartTable = styled.table`
    width: 100%;
    border-collapse: separete;
    border-spacing:0 10px;
    background: transparent;

    th {
      padding: 16px;
      text-align: left;
      color: #888;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 700;
      background: transparent;
    }

    tbody tr {
      background: #fff;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.005);
      }
    }

    td {
      padding: 20px 16px;
      border-top: 1px solid #f0f0f0;
      border-bottom: 1px solid #f0f0f0;

      &:first-child {
        border-left: 1px solid #f0f0f0;
        border-radius: 8px 0 0 8px;
      }

      &:last-child {
        border-right: 1px solid #f0f0f0;
        border-radius: 0 8px 8px 0;
      }
    }

    @media (max-width: 768px) {
      th {
        padding: 12px 8px;
        font-size: 11px;
      }

      td {
        padding: 16px 8px;
      }
    }

    @media (max-width: 480px) {
      th {
        padding: 10px 6px;
        font-size: 10px;
      }

      td {
        padding: 12px 6px;
      }
    }
`;

export const ProductInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  img {
    width: 85px;
    height: 110px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;

    strong {
      font-size: 16px;
      color: #111;
    }

    span {
      font-size: 13px;
      color: #777;
    }

    small {
      font-size: 12px;
      color: #27ae60;
      background: #e8f5e9;
      padding: 2px 8px;
      border-radius: 4px;
      width: fit-content;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    gap: 12px;

    img {
      width: 65px;
      height: 85px;
    }

    div {
      strong {
        font-size: 14px;
      }

      span {
        font-size: 12px;
      }

      small {
        font-size: 11px;
        padding: 2px 6px;
      }
    }
  }

  @media (max-width: 480px) {
    gap: 8px;

    img {
      width: 50px;
      height: 65px;
    }

    div {
      strong {
        font-size: 12px;
      }

      span {
        font-size: 11px;
      }

      small {
        font-size: 10px;
        padding: 2px 4px;
      }
    }
  }
`;

export const QuantityControl = styled.div`
    display: flex;
    align-items: center;
    background: #f8f9fa;
    border-radius: 8px;
    padding: 4px;
    width: fit-content;
    border: 1px solid #eee;
    
    button {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border-radius: 6px;
        color: ${({ theme }) => theme.colors.purple};
        cursor: pointer;
        transition: 0.2s;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);

        &:hover {
          background: ${({ theme }) => theme.colors.purple};
          color: #fff;
        }
    }

    input {
        width: 45px;
        border: none;
        background: transparent;
        padding: 15px;
        font-weight: 700;
        font-size: 14px;
        color: #333;
    }
`;

export const Price = styled.span`
    font-weight: 600;
`;

export const RemoveButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    color: #999;

    &:hover {
        color: red;
    }
`;

export const Summary = styled.div`
  margin-top: 40px;
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #eee;
  max-width: 400px;
  margin-left: auto;
  box-shadow: 0 10px 20px rgba(0,0,0,0.03);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;

    &:first-child {
        border-bottom: 1px dashed #eee;
    }

    span {
        color: #666;
        font-weight: 500;
    }

    strong {
        font-size: 16px;
    }

    .total {
        font-size: 24px;
        color: ${({ theme }) => theme.colors.purple};
        font-weight: 800;
    }
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-left: 0;
    padding: 20px;
  }

  @media (max-width: 768px) {
    margin-top: 32px;
    padding: 16px;

    div {
      padding: 10px 0;

      strong {
        font-size: 14px;
      }

      .total {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 480px) {
    margin-top: 24px;
    padding: 12px;

    div {
      padding: 8px 0;

      span {
        font-size: 13px;
      }

      strong {
        font-size: 13px;
      }

      .total {
        font-size: 18px;
      }
    }
  }
`;

export const Actions = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 16px;

  button {
    padding: 16px 32px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s;
  }

  .outline {
    background: #fff;
    border: 2px solid #eee;
    color: #555;

    &:hover {
        border-color: ${({ theme }) => theme.colors.purple};
        color: ${({ theme }) => theme.colors.purple};
    }
  }

  .primary {
    background: ${({ theme }) => theme.colors.purple};
    color: #fff;
    border: none;
    box-shadow: 0 8px 16px rgba(106, 13, 173, 0.2);

    &:hover {
        filter: brightness(1.1);
        transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;

    button {
      width: 100%;
      padding: 14px 24px;
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    gap: 10px;

    button {
      padding: 12px 20px;
      font-size: 12px;
    }
  }
`;