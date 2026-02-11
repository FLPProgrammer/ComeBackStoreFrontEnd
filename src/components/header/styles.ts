import styled from 'styled-components';

/* HEADER */
export const Container = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.black};
  position: sticky;
  top: 0;

  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;

  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    height: 70px;
    padding: 0 0.75rem;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    height: 60px;
    padding: 0 0.5rem;
  }
`;

export const BoxIcon = styled.div`
  img {
    width: 100px;
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

export const BoxOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div,
  h3 {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }

  h3 {
    @media (max-width: 1024px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;

/* ================= ATENDIMENTO ================= */

export const AtendimentoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const AtendimentoDropdown = styled.div`
  position: absolute;
  top: 130%;
  right: 0;

  width: 500px;
  background: #fff;
  border-radius: 8px;
  padding: 12px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  z-index: 1000;

  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: 0.25s ease;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    right: 24px;

    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fff;
  }

  @media (max-width: 768px) {
    width: 300px;
    right: -20px;
    padding: 10px;

    &::before {
      right: 40px;
    }
  }

  @media (max-width: 480px) {
    width: calc(100vw - 2rem);
    right: -1rem;
    left: auto;
  }
`;

/* ITEM DO DROPDOWN */
export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 10px;
  border-radius: 6px;
  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    background: #f3e8ff;
  }
`;

export const IconBox = styled.div`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: #f3e8ff;
  color: ${({ theme }) => theme.colors.purple};
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    font-size: 13px;
    font-weight: 700;
    color: #111;
  }

  span {
    font-size: 12px;
    color: #666;
  }
`;

/* ================= MINHA CONTA ================= */

export const AccountWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const AccountDropdown = styled.div`
  position: absolute;
  top: 130%;
  right: 0;

  width: 350px;
  background: #fff;
  border-radius: 6px;
  padding: 16px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  z-index: 1000;

  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: 0.25s ease;

  .account-row   {
    display: flex;
    align-items: center;
    gap: 8px;

    width: 100%;

  }

  @media (max-width: 480px) {
    width: calc(100vw - 2rem);
    right: -1rem;
  }
`;

export const AccountItem = styled.a`
  width: 100%;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  font-size: 12px;

  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  line-height: 0.8;

  background: #f5f5f5;
  border-radius: 4px;
  text-decoration: none;
  white-space: nowrap;

  transition: 0.2s;

  &:hover {
    background: #ededed;
  }
`;

export const AccountCTA = styled.a`
  width: 100%;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  padding: 5px;

  background: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 4px;
  text-decoration: none;

  transition: 0.2s;

  &:hover {
    filter: brightness(1.1);
  }
`;


/* ================= FAVORITOS ================= */

export const FavoritesWrapper = styled.div`
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;

  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const FavoritesBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;

  min-width: 18px;
  height: 18px;

  padding: 0 5px;
  border-radius: 999px;

  background: ${({ theme }) => theme.colors.purple};
  color: #fff;

  font-size: 11px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FavoritesDropdown = styled.div`
  position: absolute;
  top: 130%;
  right: 0;

  width: 320px;
  background: #fff;
  border-radius: 8px;
  padding: 16px;

  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  z-index: 1000;

  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: 0.25s ease;

  h4 {
    font-size: 14px;
    font-weight: 700;
    color: #111;
    margin-bottom: 12px;
  }

  p {
    font-size: 13px;
    color: #666;
  }

  .favorites-list {
    max-height: 240px; 
    overflow-y: auto;
    padding-right: 4px;
  }

  .favorites-list::-webkit-scrollbar {
    width: 4px;
  }

  .favorites-list::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.purple};
    border-radius: 10px;
  }

  .favorites-list::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: 768px) {
    width: 280px;
  }

  @media (max-width: 480px) {
    width: calc(100vw - 2rem);
    right: -1rem;
  }
`;


export const FavoriteItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;

  img {
    width: 45px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;

    strong {
      font-size: 13px;
      color: #111;
    }

    span {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.purple};
      font-weight: 600;
    }
  }

  button {
    border: none;
    background: transparent;
    color: #999;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      color: ${({ theme }) => theme.colors.purple};
    }
  }

  &:last-of-type {
    border-bottom: none;
  }
`;


/* ================= CARRINHO ================= */

export const CartWrapper = styled.div`
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;
  
  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;

  min-width: 18px;
  height: 18px;

  padding: 0 5px;
  border-radius: 999px;

  background: ${({ theme }) => theme.colors.purple};
  color: #fff;
  
  font-size: 11px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartDropdown = styled.div`
  position: absolute;
  top: 130%;
  right: 0;

  width: 320px;
  background: #fff;
  border-radius: 8px;
  padding: 16px;

  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  z-index: 1000;
  overflow-y: scroll;

  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: 0.25s ease;

  max-height: 450px;
  display: flex;
  flex-direction: column;
  

  h4 {
    font-size: 14px;
    font-weight: 700;
    color: #111;
    margin-bottom: 12px;
  }



  @media (max-width: 768px) {
    width: 280px;
  }

  @media (max-width: 480px) {
    width: calc(100vw - 2rem);
    right: -1rem;
    max-height: calc(100vh - 100px);
  }
`;



export const CartItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;

  img {
    width: 50px;
    height: 65px;
    object-fit: cover;
    border-radius: 4px;
    flex-shrink: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow: hidden;

      strong {
        font-size: 13px;
        color: #111;
        line-height: 1.4;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      span {
        color: purple;
      }
  }
  &:last-of-type {
    border-bottom: none;
  }
`;

export const CartFooter = styled.div`
  margin-top: auto;
  padding-top: 12px;
  border-top: 2px solid;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 13px;
    color: #666;

    strong {
      color: #111;
      font-size: 15px;
      display: block;
    }
  }
  a {
    padding: 6px 12px;
    background: ${({ theme }) => theme.colors.purple};
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;

    transition: 0.2s;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;

export const UserWelcome = styled.div`
  flex: 1;
  height: 42px;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  margin-top: 7px; 
  
  padding: 0 12px;
  margin-bottom: 8px;

  background: #f3e8ff;
  border-radius: 6px;

  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.purple};
`;

export const LogoutButton = styled.button`
  width: 100%;
  height: 42px;
  
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 8px;

  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 700;
  color: #444;

  cursor: pointer;
  transition: 0.2;

  &:hover {
    background: #ffecec;
    color: #d11a2a;
    border-color: #ffd6d6;
  }

`
