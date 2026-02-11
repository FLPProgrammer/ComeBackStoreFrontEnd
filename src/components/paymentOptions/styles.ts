import styled from 'styled-components';

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Option = styled.div<{active: boolean}>`
    display: flex;
    align-items: center;
    gap: 14px;


    padding: 14px 16px;
    border-radius: 12px;
    cursor: pointer;

    background: ${({ active }) => 
    active ? 'rgba(159, 92, 255, 0.45)' : '#2a1b45'};
    
    transition: 0.25s;

    &:hover {
        background: rgba(159, 92, 255, 0.12);
    }

`;

export const Radio = styled.div<{checked: boolean}>`
    width: 18px;
    height: 18px;
    border-radius: 50%;

    border: 2px solid
    ${({ checked }) => 
    checked ? '#9f5cff' : 'rgba(255,255,255,0.4)'};

    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: ' ';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${({ checked }) =>
        checked ? '#9f5cff' : 'transparent'};
    }
`;

export const OptionsContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 22px;
    color: #fff;
`;


export const Discount = styled.span`
    font-size: 12px;
    font-weight: 700;
    color: '#9f5cff';
`;

export const CardFlag = styled.span`
    font-size: 14px;
    opacity: 0.8;
`

export const Details = styled.div`
    padding: 16px;
    background: #120a22;
    border: 8px;
    margin-bottom: 16px;
`;