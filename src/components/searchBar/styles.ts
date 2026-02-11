import styled from 'styled-components';

export const SearchContainer = styled.div`
    position: relative;
    
    width: 42%;
    height: 52px;
    background-color: #FFF;
    border-radius: 26px;
    padding: 0 14px;

    display: flex;
    align-items: center;
    gap: 10px;

    box-shadow: 0 4px 12px rgba(106, 13, 173, 0.15);

    @media (max-width: 1024px) {
        width: 35%;
        height: 48px;
        padding: 0 12px;
    }

    @media (max-width: 768px) {
        width: 45%;
        height: 44px;
        padding: 0 10px;
        gap: 8px;
    }

    @media (max-width: 480px) {
        width: 100%;
        max-width: 200px;
        height: 40px;
        padding: 0 10px;
        gap: 6px;
    }
`

export const Input = styled.input`
    flex: 1;
    border: none;
    outline: none;

    font-size: 14px;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.black};


    ::placeholder {
        color: ${({ theme}) => theme.colors.purple};
        font-weight: 600;
        letter-spacing: 0.5px;

    }

    @media (max-width: 768px) {
        font-size: 13px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;


export const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  border: none;
  cursor: pointer;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.purple},
    #8b2bd9
  );

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(106, 13, 173, 0.4);
  }

  svg {
    stroke-width: 2.5;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Suggestions = styled.ul`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  padding: 6px 0;
  margin: 0;
  list-style: none;

  max-height: 300px;
  overflow-y: auto;
  z-index: 50;

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.purple} transparent;

  @media (max-width: 480px) {
    max-height: 250px;
    border-radius: 12px;
  }
`;

export const SuggestionItem = styled.li`
  padding: 12px 16px;

  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.purple}10;
    color: ${({ theme }) => theme.colors.purple};
  }

  & + & {
    border-top: 1px solid #f1f1f1;
  }
`;
