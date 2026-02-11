import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.aside`
  width: 260px;
  background: #120a22;
  border-radius: 16px;
  padding: 20px;

  border: 1px solid #2a1b45;
  box-shadow: 0 20px 40px rgba(106, 13, 173, 0.25);

  @media (max-width: 1024px) {
    width: 240px;
    padding: 18px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto 20px;
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 12px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;

  color: #fff;
  margin-bottom: 16px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Item = styled.li<{ active: boolean }>`
  border-radius: 10px;
  transition: 0.25s;

  background: ${({ active }) =>
    active ? "linear-gradient(135deg, #9f5cff, #6a0dad)" : "transparent"};

  &:hover {
    background: ${({ active }) =>
      active
        ? "linear-gradient(135deg, #9f5cff, #6a0dad)"
        : "rgba(159, 92, 255, 0.12)"};
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 12px 14px;

  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;

  color: #fff;
  text-decoration: none;

  opacity: 0.9;

  &:hover {
    opacity: 1;
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 11px;
  }
`;
