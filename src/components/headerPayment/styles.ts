import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.black};
    position: sticky;
    top: 0;
    z-index: 1000;
    gap: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;

    color: ${({ theme }) => theme.colors.white};
    
    @media (max-width: 768px) {
        height: 70px;
        padding: 0 0.75rem;
        justify-content: space-between;
    }

    @media (max-width: 480px) {
        height: 60px;
        padding: 0 0.5rem;
    }
    
`

export const BoxIcon = styled.div`
    img {
        width: 70px;
    }

    @media (max-width: 768px) {
        img {
            width: 70px;
        }
    }

    @media (max-width: 480px) {
        img {
            width: 60px;
        }
    }

`

export const BoxInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const BoxInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

