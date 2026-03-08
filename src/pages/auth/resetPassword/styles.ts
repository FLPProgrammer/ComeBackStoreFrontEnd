import styled from 'styled-components';


export const ContainerForm = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const Form = styled.form`
    background: #0e0619;
    border: 1px solid #2a1b45;
    border-radius: 10px;
    padding: 30px;
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;
    gap: 12px;
`;


export const Title = styled.h1`
    color: #fff;
    font-size: 22px;
    text-align: center;
`;

export const Input = styled.input`
   background: #140c23;
   border: 1px solid #2a1b45;
   border-radius: 8px;
   padding: 12px;
   color: #fff;
   font-size: 14px;

   &:focus {
        outline: none;
        border-color: #9f5cff;
        box-shadow: 0 0 0 2px rgba(159,92,255,0.25);
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

    &:hover {
        filter: brightness(1.1);
        transform: translateT(-1px);
    }
`