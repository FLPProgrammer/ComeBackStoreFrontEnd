import styled from 'styled-components';


export const Card = styled.div`
    width: 280px;
    min-height: 450px;
    max-height: 450px;
    background: ${({ theme }) => theme.colors.black};
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 14px;
    text-decoration: none;

    border: 1px solid rgba(128, 90, 213, 0.25);

    box-shadow:
        0 4px 12px rgba(128, 90, 213, 0.15),
        0 8px 24px rgba(128, 90, 213, 0.10);

    transition: all 0.25s ease;

    overflow: hidden;
    box-sizing: border-box;

    &:hover {
        transform: translateY(-4px);
        box-shadow:
            0 6px 16px rgba(128, 90, 213, 0.25),
            0 12px 32px rgba(128, 90, 213, 0.20);
    }

    @media (max-width: 1024px) {
        width: 240px;
        min-height: 400px;
        max-height: 400px;
        padding: 18px;
        gap: 12px;
    }

    @media (max-width: 768px) {
        width: 200px;
        min-height: 360px;
        max-height: 360px;
        padding: 16px;
        gap: 12px;
    }

    @media (max-width: 480px) {
        width: 160px;
        min-height: 320px;
        max-height: 320px;
        padding: 12px;
        gap: 10px;
        border-radius: 8px;
    }
`;


export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
  padding: 0;
  margin: 0;

  img {
    width: 50%;
    max-width: 140px;
    height: auto;
    aspect-ratio: 1;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 6px 16px rgba(128, 90, 213, 0.25);
  }

  button.favorite {
    position: absolute;
    top: 0;
    right: 0;

    width: 32px;
    height: 32px;

    border-radius: 50%;
    border: none;

    background: #1c1c1c;
    color: ${({ theme }) => theme.colors.purple};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: 0.25s;
    z-index: 10;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    flex-shrink: 0;

    svg {
      width: 16px;
      height: 16px;
    }

    &:hover {
      transform: scale(1.1);
    }

    &.active {
      background: ${({ theme }) => theme.colors.purple};
      color: #fff;
    }

    @media (max-width: 1024px) {
      width: 30px;
      height: 30px;

      svg {
        width: 15px;
        height: 15px;
      }
    }

    @media (max-width: 768px) {
      width: 28px;
      height: 28px;

      svg {
        width: 14px;
        height: 14px;
      }
    }

    @media (max-width: 480px) {
      width: 24px;
      height: 24px;

      svg {
        width: 12px;
        height: 12px;
      }
    }
  }

  @media (max-width: 1024px) {
    img {
      max-width: 120px;
    }
  }

  @media (max-width: 768px) {
    img {
      max-width: 100px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 80px;
    }
  }
`;


export const Info = styled.div`
    width: 100%;
    text-align: center;
    flex-shrink: 0;
    padding: 0;
    margin: 0;
    min-height: fit-content;

    h3 {
        font-size: 16px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.purple};
        margin: 0;
        padding: 0;
        
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.4;
        min-height: 2.8em;
        max-height: 2.8em;
        word-wrap: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
    }

    span {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.white};
        display: block;
        margin-top: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 1.4;
        min-height: 1.4em;
    }

    @media (max-width: 1024px) {
        h3 {
            font-size: 15px;
            min-height: 2.8em;
            max-height: 2.8em;
        }
        span {
            font-size: 11px;
        }
    }

    @media (max-width: 768px) {
        h3 {
            font-size: 13px;
            min-height: 2.6em;
            max-height: 2.6em;
            line-height: 1.3;
        }
        span {
            font-size: 10px;
            margin-top: 4px;
        }
    }

    @media (max-width: 480px) {
        h3 {
            font-size: 11px;
            min-height: 2.2em;
            max-height: 2.2em;
            line-height: 1.1;
        }
        span {
            font-size: 9px;
            margin-top: 4px;
        }
    }
`

export const PriceBox  = styled.div`
    width: 100%;
    text-align: center;
    flex-shrink: 0;
    padding: 0;
    margin: 0;
    min-height: fit-content;

    strong {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.white};
        display: block;
        word-wrap: break-word;
        overflow-wrap: break-word;
        line-height: 1.4;
        min-height: 1.4em;
        margin: 0;
        padding: 0;
    }
    small {
        display: block;
        font-size: 11px;
        color: ${({ theme }) => theme.colors.white};
        margin-top: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: break-word;
        overflow-wrap: break-word;
        line-height: 1.4;
        min-height: 1.4em;
    }

    p {
        font-size: 11px;
        color: ${({ theme }) => theme.colors.white};
        margin: 6px 0 0 0;
        padding: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: break-word;
        overflow-wrap: break-word;
        line-height: 1.4;
        min-height: 1.4em;
    }

    span {
        color: ${({ theme }) => theme.colors.purple};
    }

    @media (max-width: 1024px) {
        strong {
            font-size: 16px;
        }
        small {
            font-size: 10px;
            margin-top: 5px;
        }
        p {
            font-size: 10px;
            margin-top: 5px;
        }
    }

    @media (max-width: 768px) {
        strong {
            font-size: 14px;
        }
        small {
            font-size: 9px;
            margin-top: 4px;
        }
        p {
            font-size: 9px;
            margin-top: 4px;
        }
    }

    @media (max-width: 480px) {
        strong {
            font-size: 12px;
        }
        small {
            font-size: 8px;
            margin-top: 4px;
        }
        p {
            font-size: 8px;
            margin-top: 4px;
        }
    }
`

export const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
  padding-top: 0;
  flex-shrink: 0;

  .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    background: rgba(128, 90, 213, 0.15);
    border-radius: 8px;
    padding: 8px 12px;
    width: 100%;
    box-sizing: border-box;
    min-height: 36px;
  }

  .quantity button {
    border: none;
    background: none;

    width: 28px;
    height: 28px;
    min-width: 28px;
    min-height: 28px;
    max-width: 28px;
    max-height: 28px;

    font-size: 18px;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.purple};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.2s;
    flex-shrink: 0;

    &:hover {
      background: rgba(128, 90, 213, 0.25);
      border-radius: 6px;
    }

    @media (max-width: 1024px) {
      width: 26px;
      height: 26px;
      min-width: 26px;
      min-height: 26px;
      max-width: 26px;
      max-height: 26px;
      font-size: 16px;
    }

    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
      min-width: 24px;
      min-height: 24px;
      max-width: 24px;
      max-height: 24px;
      font-size: 15px;
    }

    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
      min-width: 20px;
      min-height: 20px;
      max-width: 20px;
      max-height: 20px;
      font-size: 14px;
    }
  }

  .quantity span {
    min-width: 20px;
    max-width: 40px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    line-height: 1;

    @media (max-width: 1024px) {
      font-size: 13px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 11px;
    }
  }

  .buttons {
    display: flex;
    gap: 8px;
    width: 100%;
    box-sizing: border-box;
  }

  .buttons button {
    flex: 1 1 auto;
    min-width: 0;
    height: 40px;
    min-height: 40px;
    max-height: 40px;

    border-radius: 8px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;

    transition: 0.25s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 1024px) {
        height: 36px;
        min-height: 36px;
        max-height: 36px;
        font-size: 11px;
        padding: 0 8px;
    }

    @media (max-width: 768px) {
        height: 32px;
        min-height: 32px;
        max-height: 32px;
        font-size: 10px;
        border-radius: 6px;
        padding: 0 6px;
        gap: 6px;
    }

    @media (max-width: 480px) {
        height: 28px;
        min-height: 28px;
        max-height: 28px;
        font-size: 9px;
        border-radius: 6px;
        padding: 0 5px;
        gap: 4px;
    }
  }

  .buttons .buy {
    background: linear-gradient(135deg, #9f5cff, #6a0dad);
    border: none;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      filter: brightness(1.1);
      transform: translateY(-1px);
    }
  }

  .buttons .cart {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.purple};

    &:hover {
      background: rgba(128, 90, 213, 0.15);
    }
  }

  @media (max-width: 1024px) {
    gap: 9px;

    .quantity {
      min-height: 34px;
      padding: 7px 10px;
    }
  }

  @media (max-width: 768px) {
    gap: 8px;

    .quantity {
      min-height: 32px;
      padding: 6px 10px;
      gap: 10px;
    }
  }

  @media (max-width: 480px) {
    gap: 7px;

    .quantity {
      min-height: 28px;
      padding: 5px 8px;
      gap: 8px;
    }
  }
`;

