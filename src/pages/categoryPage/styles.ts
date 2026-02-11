import styled from 'styled-components';


export const Container = styled.main`
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem 1rem;

    @media (max-width: 1024px) {
        padding: 1.5rem 0.75rem;
    }

    @media (max-width: 768px) {
        padding: 1.25rem 0.5rem;
    }

    @media (max-width: 480px) {
        padding: 1rem 0.5rem;
    }
`;

export const Header = styled.div`
     margin-bottom: 2rem;

    h1 {
        font-size: 2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.purple};
        margin-bottom: 0.25rem
    }
    
    span {
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.7;

    }

    @media (max-width: 1024px) {
        margin-bottom: 1.5rem;

        h1 {
            font-size: 1.75rem;
        }

        span {
            font-size: 0.85rem;
        }
    }

    @media (max-width: 768px) {
        margin-bottom: 1.25rem;

        h1 {
            font-size: 1.5rem;
        }

        span {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 480px) {
        margin-bottom: 1rem;

        h1 {
            font-size: 1.25rem;
        }

        span {
            font-size: 0.75rem;
        }
    }
`;

export const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    padding: 1rem;
    gap: 1.5rem;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        padding: 0.75rem;
        gap: 1.25rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        padding: 0.5rem;
        gap: 1rem;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        padding: 0.5rem;
        gap: 0.75rem;
    }
`;