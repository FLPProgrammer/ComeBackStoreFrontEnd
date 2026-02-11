import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #5B21B6;
  }

  @media (max-width: 768px) {
    gap: 20px;

    h2 {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    gap: 16px;

    h2 {
      font-size: 18px;
    }
  }
`;



export const WishlistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 28px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 16px;
  }
`;



export const WishlistItem = styled.div`
  background: #FFFFFF;
  border-radius: 18px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 45px rgba(91, 33, 182, 0.2);
  }

  .cover {
    width: 140px;
    height: 140px;
    border-radius: 14px;
    overflow: hidden;
    background: #F3F4F6;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 1024px) {
      width: 120px;
      height: 120px;
    }

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
      border-radius: 12px;
    }

    @media (max-width: 480px) {
      width: 80px;
      height: 80px;
      border-radius: 10px;
    }
  }

  strong {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: #111827;

    @media (max-width: 768px) {
      font-size: 13px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  a {
    font-size: 13px;
    font-weight: 500;
    color: #6A0DAD;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #7C3AED;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 11px;
    }
  }

  .remove {
    margin-top: 6px;
    width: 100%;
    padding: 8px;
    border-radius: 10px;
    border: none;
    background: #FEE2E2;
    color: #DC2626;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #DC2626;
      color: #FFFFFF;
    }
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
