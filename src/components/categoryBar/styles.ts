import styled, { css } from "styled-components";
import { IDropdownProps } from '../../interfaces/interfaces';
import { Link } from 'react-router-dom';

export const Container = styled.div<{ hidden: boolean }>`
  position: sticky;
  top: 100px;
  left: 0;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  z-index: 900;

  display: flex;

  transition: 
    transform 0.35s ease,
    opacity 0.25s ease;

  ${({ hidden }) =>
    hidden &&
    css`
      transform: translateY(-100%);
      opacity: 0;
      pointer-events: none;
    `}

  @media (max-width: 768px) {
    top: 70px;
  }

  @media (max-width: 480px) {
    top: 60px;
  }
`;


export const Menu = styled.ul`
    max-width: 1300px;
    margin: 0 auto;
    padding: 15px 20px;
    list-style: none;

    display: flex;
    gap: 40px;
    align-items: center;

    font-weight: 600;
    font-size: 14px;

    @media (max-width: 1024px) {
        gap: 24px;
        padding: 12px 16px;
        font-size: 13px;
    }

    @media (max-width: 768px) {
        gap: 16px;
        padding: 10px 12px;
        font-size: 12px;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    @media (max-width: 480px) {
        gap: 12px;
        padding: 8px 10px;
        font-size: 11px;
    }
`;

export const MenuItem = styled.li`
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;

    &:hover > div {
        opacity: 1;
        visibility: visible;
        transform: translateY(0px);

        @media (max-width: 768px) {
            opacity: 0;
            visibility: hidden;
        }
    }
`;

export const Dropdown = styled.div<IDropdownProps>`
    position: absolute;
    top: 100%;
    left: 0;

    background: #fff;
    border-top: 3px solid ${({ theme }) => theme.colors.purple};
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
    transition: 0.25s ease;

    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);

    padding: 30px 40px;
    display: flex;
    gap: 60px;

    /* Mega menu padrão */
    width: 900px;

    /* Dropdown compacto para TODOS OS JOGOS XBOX */
    ${({ small }) =>
        small &&
        css`
            width: 300px;
            gap: 0;
            padding: 25px 30px;
        `}

    @media (max-width: 1024px) {
        width: 700px;
        gap: 40px;
        padding: 24px 32px;

        ${({ small }) =>
            small &&
            css`
                width: 250px;
                padding: 20px 24px;
            `}
    }

    @media (max-width: 768px) {
        width: calc(100vw - 2rem);
        left: 50%;
        transform: translateX(-50%) translateY(10px);
        gap: 30px;
        padding: 20px 24px;

        ${({ small }) =>
            small &&
            css`
                width: calc(100vw - 2rem);
            `}
    }

    @media (max-width: 480px) {
        width: calc(100vw - 1rem);
        gap: 20px;
        padding: 16px 20px;
        flex-direction: column;

        ${({ small }) =>
            small &&
            css`
                width: calc(100vw - 1rem);
            `}
    }
`;

export const DropdownColumn = styled.ul`
    list-style: none;
    padding: 0;

    display: flex;
    flex-direction: column;
    gap: 12px;

    li {
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.colors.purple};
        }
    }
`;


export const CategoryLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-size: 13px;
    font-weight: 500;
    display: block;
    padding: 6px 0;

    &:hover {
        color: ${({ theme }) => theme.colors.purple};
    }
`;

