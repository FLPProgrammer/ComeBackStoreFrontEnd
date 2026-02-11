import styled from 'styled-components';


export const ProductContainer = styled.div`
   width: 100%;
   max-width: 1200px;
   margin: 40px auto;
   padding: 0 20px;
   display: flex;
   flex-direction: column;
   gap: 80px;

   @media (max-width: 1024px) {
      gap: 60px;
      margin: 32px auto;
      padding: 0 16px;
   }

   @media (max-width: 768px) {
      gap: 40px;
      margin: 24px auto;
      padding: 0 12px;
   }

   @media (max-width: 480px) {
      gap: 32px;
      margin: 20px auto;
      padding: 0 10px;
   }
`;

export const ProductMain = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;



export const ProductInfo = styled.div`
  flex: 1;
  min-width: 320px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1024px) {
    width: 100%;
    min-width: auto;
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;


export const Thumbnails = styled.div`
  width: 80px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: 0.2s;

    &:hover {
      border-color: ${({ theme }) => theme.colors.purple};
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: row;
    margin-top: 0;
    gap: 8px;
    justify-content: center;

    img {
      width: 56px;
      height: 56px;
    }
  }

  @media (max-width: 480px) {
    gap: 6px;

    img {
      width: 48px;
      height: 48px;
    }
  }
`;



export const ImageWrapper = styled.div`
  width: 420px;
  flex-shrink: 0;

  display: flex;
  justify-content: center;

  img {
    width: 100%;
    border-radius: 16px;
    background-color: #140c23;
    box-shadow: 0 20px 40px rgba(106, 13, 173, 0.35);
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 480px) {
    max-width: 100%;

    img {
      border-radius: 12px;
    }
  }
`;

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;

    background: #140c23;
    backdrop-filter: blur(12px);

    padding: 24px;
    border-radius: 16px;

    border: 1px solid #2a1b45;
    box-shadow: 10px 20px 40px rgba(47, 3, 80, 0.35);

    @media (max-width: 1024px) {
      padding: 20px;
      gap: 14px;
    }

    @media (max-width: 768px) {
      padding: 16px;
      gap: 12px;
      border-radius: 12px;
    }

    @media (max-width: 480px) {
      padding: 12px;
      gap: 10px;
      border-radius: 10px;
    }
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.3;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`

export const Platform = styled.span`
    font-size: 14px;
    color: #aaa;
`

export const Price = styled.h2`
    margin-top: 8px;
    font-size: 28px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.purple};

    @media (max-width: 1024px) {
      font-size: 24px;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
`

export const BuyButton = styled.button`
    width: 100%;
    padding: 14px;

    border-radius: 10px;
    border: none;
    background: linear-gradient(135deg, #9f5cff, #6a0dad);
    color: ${({ theme }) => theme.colors.white};

    font-size: 15px;
    font-weight: 700;
    
    cursor: pointer;
    transition: 0.25;

    &:hover {
        filter: brightness(1.1);
        transform: translateY(-1px);
    }

    @media (max-width: 1024px) {
      margin: 16px;
      padding: 12px 0;
      font-size: 14px;
    }

    @media (max-width: 768px) {
      margin: 12px;
      padding: 10px 0;
      font-size: 13px;
      border-radius: 8px;
    }

    @media (max-width: 480px) {
      margin: 10px;
      padding: 10px 0;
      font-size: 12px;
      border-radius: 6px;
    }
`;