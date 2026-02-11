import styled from 'styled-components';


export const FooterContainer = styled.footer`
    background: linear-gradient(
        180deg,
        #0b0615 0%,
        #05020a 100%
    );

    padding: 64px 32px 24px;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: 1024px) {
        padding: 48px 24px 20px;
    }

    @media (max-width: 768px) {
        padding: 40px 20px 16px;
    }

    @media (max-width: 480px) {
        padding: 32px 16px 12px;
    }
`;

export const FooterGrid = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 40px;

    @media (max-width: 1024px) {
        gap: 32px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 24px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 24px;
    }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Title = styled.h4`
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;

    color: ${({ theme }) => theme.colors.purple};

    position: relative;
    padding-bottom: 10px;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;

        width: 32px;
        height: 2px;
        background: ${({ theme }) => theme.colors.purple};
    }

    @media (max-width: 768px) {
        font-size: 13px;
        padding-bottom: 8px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding-bottom: 6px;

        &::after {
            width: 24px;
        }
    }
`;

export const Text = styled.p`
    font-size: 13px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.75);
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: column;
    gap: 10px;
`;


export const ListItem = styled.li`
    font-size: 13px;
    color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.purple};
    }
`;


export const SocialIcons = styled.div`
    display: flex;
    gap: 12px;

    button {
        width: 36px;
        height: 36px;
        border-radius: 8px;

        border: 1px solid rgba(128, 90, 213, 0.4);
        background: rgba(128, 90, 213 ,0.1);

        transition: all 0.25 ease;

        &:hover {
            background: ${({ theme }) => theme.colors.purple};
            color: #fff;
            transform: translateY(-2px);

        }
    }
`;

export const BottomBar = styled.div`
    margin-top: 48px;
    padding-top: 16px;

    border-top: 1px solid rgba(128, 90, 213 ,0.2);

    text-align: center;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);

    @media (max-width: 768px) {
        margin-top: 32px;
        padding-top: 12px;
        font-size: 11px;
    }

    @media (max-width: 480px) {
        margin-top: 24px;
        padding-top: 10px;
        font-size: 10px;
    }
`