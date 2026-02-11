import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    @media (max-width: 768px) {
        gap: 8px;
        padding: 16px;
        max-width: 100%;
    }

    @media (max-width: 480px) {
        gap: 6px;
        padding: 12px;
    }
`;


export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
            
    img {
        width: 80px;
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
`;


export const Title = styled.div`
    text-align: center;

    h1 {
        color: #fff;
        font-size: 22px;
    }

    span {
        font-size: 13px;
        color: #aaa;
    }

    a {
        color: #9f5cff;
        text-decoration: none;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 20px;
        }

        span {
            font-size: 12px;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 18px;
        }

        span {
            font-size: 11px;
        }
    }
`;

export const Input = styled.input`
    background: #140c23;
    border: 1px solid #2a1b45;
    border-radius: 8px;
    padding: 12px;
    color: #fff;
    font-size: 14px;
    width: 100%;
    max-width: 350px;

    &:focus {
        outline: none;
        border-color: #9f5cff;
        box-shadow: 0 0 0 2px rgba(159,92,255,0.25);
    }

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 13px;
        max-width: 100%;
    }

    @media (max-width: 480px) {
        padding: 10px;
        font-size: 12px;
    }
`;

export const Button = styled.button`
    margin-top: 8px;
    background: linear-gradient(135deg, #9f5cff, #6a0dad);
    border: none;
    border-radius: 8px;
    padding: 12px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    width: 100%;
    max-width: 350px;
    font-size: 14px;

    &:hover {
        filter: brightness(1.1);
        transform: translateY(-1px);
    }

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 13px;
        max-width: 100%;
    }

    @media (max-width: 480px) {
        padding: 10px;
        font-size: 12px;
    }
`;

export const Footer = styled.div`
    text-align: center;
    font-size: 12px;

    a {
        color: #aaa;
        text-decoration: none;
    }

    &:hover {
        color: #9f5cff;
    }
`;