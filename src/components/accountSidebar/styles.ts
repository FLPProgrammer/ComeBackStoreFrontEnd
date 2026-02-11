import styled from 'styled-components';

export const Container = styled.aside`
  width: 260px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);

  @media (max-width: 900px) {
    width: 100%;
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 8px;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;

  svg {
    color: #6a0dad;
  }

  strong {
    font-size: 14px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  svg {
    color: #6a0dad;
  }

  &:hover {
    background: rgba(106, 13, 173, 0.08);
  }

  &.logout {
    margin-top: 12px;
    color: #d00;

    svg {
      color: #d00;
    }

    &:hover {
      background: rgba(208, 0, 0, 0.08);
    }
  }
`;
