import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr; 
  gap: 32px;

  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin: 32px auto;
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    margin: 24px auto;
    padding: 0 12px;
  }

  @media (max-width: 480px) {
    gap: 16px;
    margin: 20px auto;
    padding: 0 10px;
  }
`;

export const Sidebar = styled.aside`
  position: sticky;
  top: 120px;

  height: fit-content;

  @media (max-width: 1024px) {
    position: static;
    top: auto;
  }

  @media (max-width: 768px) {
    top: 90px;
  }

  @media (max-width: 480px) {
    top: 80px;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;

  h1 {
    font-size: 28px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 28px;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.purple};

    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 24px;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;

        h1 {
            font-size: 20px;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 18px;
        }
    }

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 12px;
  }
`;
