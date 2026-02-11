import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background: url("/backgroundAuthPages.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 16px;
    }

    @media (max-width: 480px) {
        padding: 12px;
    }
`;