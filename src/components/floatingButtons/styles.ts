import styled  from 'styled-components';

export const FloatingContainer = styled.div`
    position: fixed;
    bottom: 24px;
    right: 24px;

    display: flex;
    flex-direction: column;
    gap: 12px;

    z-index: 999;

    @media (max-width: 768px) {
        bottom: 20px;
        right: 20px;
        gap: 10px;
    }

    @media (max-width: 480px) {
        bottom: 16px;
        right: 16px;
        gap: 8px;
    }
`

export const WhatsButton = styled.a`
    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background: #25d366;
    color: #fff;

    box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);

    transition: all 0.25s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px, 32px rgba(37, 211, 102, 0.55);
    }
`

export const TopButton = styled.button`
    width: 44px;
    height: 44px;

    border-radius: 50%;
    border: 1px solid rgba(128, 90, 213, 0.4);
    background: rgba(128, 90, 213, 0.15);
    color: ${({ theme }) => theme.colors.purple};

    display: flex;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;

    backdrop-filter: blur(6px);

    box-shadow: 0 8px 24px rgba(128, 90, 213, 0.25);
    transition: all 0.25s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.purple};
        color: #fff;
        transform: translateY(-4px);
    }

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }

    @media (max-width: 480px) {
        width: 36px;
        height: 36px;
    }
`;