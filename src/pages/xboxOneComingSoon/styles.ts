import styled from 'styled-components';

export const Container = styled.div`
    min-height: calc(100vh - 240px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;

    background: radial-gradient(
        circle at top,
        rgba(106, 13, 173, 0.15)
        transparent 60%
    );
`;

export const Content = styled.div`
    max-width: 600px;
    text-align: center;
    background: white;
    padding: 50px 40px;
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(106, 13, 173, 0.15);
`;

export const Character = styled.img`
    width: 180px;
    margin-bottom: 24px;
    animation: float 3s ease-in-out infinite;

    @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.purple};
    margin-bottom: 16px;
`;

export const Description = styled.p`
    font-size: 16px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 32px;
`;

export const BackButton = styled.button`
    padding: 14px 32px;
    border-radius: 999px;
    border: none;
    background: ${({ theme }) => theme.colors.purple};
    color: white;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.25s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(106, 13, 173, 0.35);
    }
`;