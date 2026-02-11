import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 24px 16px;
    background: linear-gradient(
            180deg,
            rgba(18, 10, 34, 0.95),
            rgba(11, 6, 22, 1)
    );

    border-top: 1px solid #2a1b45; 
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: auto;
    gap: 14px;

    color: #fff;
    opacity: 0.75;

    img {
        width: 28px;
        height: 28px;
        object-fit: contain;
    }

    h1 {
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0.4px;
        text-align: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;

        h1 {
            font-size: 12px;
        }
    }
`