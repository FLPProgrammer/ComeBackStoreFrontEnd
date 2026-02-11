import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    background: radial-gradient(
        circle at top,
        #1b1035 0%,
        #0b0616 60%
    );
`;

export const Content = styled.div`
    flex: 1;
`