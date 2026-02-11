import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 32px;
  padding: 40px;
  max-width: 1300px;
  margin: 0 auto;

  .main {
    flex: 1;
  }

  @media (max-width: 1024px) {
    gap: 24px;
    padding: 32px 24px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    padding: 24px 16px;
  }

  @media (max-width: 480px) {
    gap: 16px;
    padding: 20px 12px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;

  button {
    padding: 12px 20px;
    border-radius: 8px;
    border: 1px solid #e5e5e5;
    background: #f5f5f5;
    font-weight: 500;
    cursor: pointer;
    font-size: 14px;

    &.active {
      background: linear-gradient(135deg, #6a0dad, #8b2fdc);
      color: white;
      border: none;
    }
  }

  @media (max-width: 768px) {
    gap: 8px;
    margin-bottom: 20px;

    button {
      padding: 10px 16px;
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 16px;

    button {
      padding: 8px 12px;
      font-size: 12px;
      flex: 1;
      min-width: calc(50% - 3px);
    }
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

  h2 {
    margin-bottom: 24px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .actions {
    margin-top: 32px;
    display: flex;
    gap: 16px;
  }

  button.primary {
    background: #6a0dad;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
  }

  button.outline {
    background: transparent;
    border: 2px solid #6a0dad;
    color: #6a0dad;
    padding: 12px 20px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    padding: 24px;

    h2 {
      margin-bottom: 20px;
      font-size: 20px;
    }

    .grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .actions {
      margin-top: 24px;
      flex-direction: column;
      gap: 12px;

      button {
        width: 100%;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 8px;

    h2 {
      margin-bottom: 16px;
      font-size: 18px;
    }

    .grid {
      gap: 10px;
    }

    .actions {
      margin-top: 20px;
      gap: 10px;
    }
  }
`;
