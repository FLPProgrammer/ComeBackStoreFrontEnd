import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 32px;
  border-bottom: 1px solid #E5E7EB;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  div {
    padding: 10px;

    strong {
      margin-left: 10px;
    }

    input {
      width: 200px;
      padding: 10px;
      border-radius: 8px;
      border: 1px solid #ddd;
      outline: none;

      &:focus {
        border-color: #7b2cbf;
        box-shadow: 0 0 0 2px rgba(123, 44, 191, 0.15);
      }
    }
  }

  button {
    background: transparent;
    border: none;
    padding: 12px 18px;
    border-radius: 8px 8px 0 0;

    font-size: 15px;
    font-weight: 500;
    color: #6B7280;

    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
      color: #6D28D9;
      background: #F5F3FF;
    }

    &.active {
      color: #5B21B6;
      background: #EDE9FE;
      font-weight: 600;
      border-bottom: 2px solid #6D28D9;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    button {
      border-radius: 8px;
    }
  }
`;
