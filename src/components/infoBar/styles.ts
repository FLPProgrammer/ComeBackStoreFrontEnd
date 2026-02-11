import styled from 'styled-components';;

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding-top: 50px;
    padding-bottom: 50px;

    svg {
        color: ${({ theme }) => theme.colors.black};
    }

    @media (max-width: 1024px) {
        height: auto;
        padding: 32px 20px;
        gap: 24px;
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        padding: 24px 16px;
        gap: 20px;
    }

    @media (max-width: 480px) {
        padding: 20px 12px;
        gap: 16px;
        flex-direction: column;
        height: auto;

        svg {
            width: 20px;
            height: 20px;
        }
    }
`

export const BoxInformation = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.purple};
    font-size: 14px;

    @media (max-width: 1024px) {
        font-size: 13px;
    }

    @media (max-width: 768px) {
        font-size: 12px;
        gap: 0.4rem;
    }

    @media (max-width: 480px) {
        font-size: 11px;
        gap: 0.3rem;
    }
`