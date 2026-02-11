import styled from 'styled-components';

export const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: #120a22;
    padding: 20px;
`;


export const Row = styled.div`
    display: flex;
    gap: 10px;
`;

export const Input = styled.input`
    flex: 1;
    padding: 12px;
    border-radius: 10px;

    background: #120a22;
    border: 1px solid;
    color: #fff;

    &::placeholder {
        color: #aaa;
    } 
`;

export const Checkbox = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    opacity: 0.85;
`;

export const Total = styled.div`
    margin-top: 8px;
    font-weight: 700;
    color: #9f5cff;
`