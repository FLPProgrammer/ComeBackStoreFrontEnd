import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: #140c23;
    border: 1px solid #2a1b45;
    box-shadow: 10px 20px 40px rgba(47, 3, 80, 0.35);
    border-radius: 12px;
    padding: 20px;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 1024px) {
        padding: 18px;
        gap: 14px;
    }

    @media (max-width: 768px) {
        padding: 16px;
        gap: 12px;
        border-radius: 10px;
    }

    @media (max-width: 480px) {
        padding: 12px;
        gap: 10px;
        border-radius: 8px;
    }
`;

export const Methods = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

`;

export const MethodRow = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;


    strong {
            font-weight: 600;
        }
        span {
            color: #9f5cff;
            font-weight: 500;
        }

    @media (max-width: 768px) {
        font-size: 13px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        flex-direction: column;
        gap: 4px;
    }
`;

export const Installments = styled.div`
    font-size: 13px;
    color: #ccc;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const PixRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
        color: #00d17d;
        font-weight: 600;
    }
    span {
        font-size: 16px;
        font-weight: 700;
        color: #00d17d;
    }

    @media (max-width: 768px) {
        span {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;

        span {
            font-size: 13px;
        }
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: #2a1b45;
    
`;

export const FreightBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    strong {
        font-size: 14px;
    }

    div {
        display: flex;
        gap: 8px;
    }

    @media (max-width: 768px) {
        gap: 8px;

        strong {
            font-size: 13px;
        }

        div {
            gap: 6px;
        }
    }

    @media (max-width: 480px) {
        gap: 6px;

        strong {
            font-size: 12px;
        }

        div {
            flex-direction: column;
            gap: 8px;
        }
    }
`;

export const FreightInput = styled.input`
    flex: 1;
    background: #0e081a;
    border: 1px solid #2a1b45;
    border-radius: 8px;
    padding: 10px;
    color: #fff;

    &:focus {
        outline: none;
        border-color: #9f5cff;
        box-shadow: 0 0 0 2px rgba(159, 92, 255, 0.25);
    }
`;

export const FreightButton = styled.button`
    background: linear-gradient(135deg, #9f5cff, #6a0dad);
    border: none;
    border-radius: 8px;
    padding: 0 16px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        filter: brightness(1.1);
    }
`;

    