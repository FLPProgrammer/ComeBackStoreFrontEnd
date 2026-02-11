import styled from 'styled-components';


export const Container = styled.div`
    background: #fff;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.05);

    @media (max-width: 768px) {
        padding: 24px;
        border-radius: 12px;
    }

    @media (max-width: 480px) {
        padding: 16px;
        border-radius: 10px;
    }
`;

export const Header = styled.div`
    margin-bottom: 24px;

    h2 {
        font-size: 22px;
        color: #2d2d2d;
    }

    p {
        color: #777;
        margin-top: 4px;
    }

    @media (max-width: 768px) {
        margin-bottom: 20px;

        h2 {
            font-size: 20px;
        }
    }

    @media (max-width: 480px) {
        margin-bottom: 16px;

        h2 {
            font-size: 18px;
        }

        p {
            font-size: 13px;
        }
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;

    label {
        font-weight: 600;
        margin-bottom: 6px;
    }

    input {
        padding: 12px 14px;
        border-radius: 8px;
        border: 1px solid #ddd;
        outline: none;

        &:focus {
            border-color: #7b2cbf;
            box-shadow: 0 0 0 2px rgba(123, 44, 191, 0.15);
        }
    }

    small {
        margin-top: 6px;
        font-size: 12px;
        color: #777;
    }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    margin-bottom: 6px;
  }

  input {
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid #ddd;
    outline: none;

    &:focus {
      border-color: #7b2cbf;
      box-shadow: 0 0 0 2px rgba(123, 44, 191, 0.15);
    }
  }

  small {
    margin-top: 6px;
    font-size: 12px;
    color: #777;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;

  button {
    padding: 12px 22px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    border: none;
  }

  .cancel {
    background: transparent;
    border: 1px solid #ccc;
  }

  .primary {
    background: linear-gradient(135deg, #7b2cbf, #9d4edd);
    color: #fff;
  }

  @media (max-width: 768px) {
    margin-top: 24px;
    gap: 12px;

    button {
      padding: 10px 18px;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    margin-top: 20px;
    gap: 10px;

    button {
      width: 100%;
      padding: 10px 16px;
      font-size: 13px;
    }
  }
`;
