import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.black};
    padding: 40px 20px;

    @media (max-width: 1024px) {
        padding: 32px 16px;
        gap: 12px;
    }

    @media (max-width: 768px) {
        padding: 24px 12px;
        gap: 10px;
        flex-wrap: wrap;
    }

    @media (max-width: 480px) {
        padding: 20px 10px;
        gap: 8px;
    }
`;

export const BoxImg = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 5px solid ${({ theme }) => theme.colors.black};
        border-radius: 20px;

        box-shadow:
                0 0 12px rgba(162, 0, 255, 0.4),
                0 0 25px rgba(162, 0, 255, 0.25),
                0 10px 20px rgba(0, 0, 0, 0.35);

    }

    @media (max-width: 1024px) {
        width: 320px;
        height: 320px;
    }

    @media (max-width: 768px) {
        width: 280px;
        height: 280px;

        img {
            border: 4px solid ${({ theme }) => theme.colors.black};
            border-radius: 16px;
        }
    }

    @media (max-width: 480px) {
        width: 100%;
        max-width: 240px;
        height: 240px;

        img {
            border: 3px solid ${({ theme }) => theme.colors.black};
            border-radius: 12px;
        }
    }

`