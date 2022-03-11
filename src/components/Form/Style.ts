import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  label {
    max-width: 300px;
    width: 100%;
    margin-top: 1rem;
    p {
      margin-bottom: 5px;
    }
  }
  input {
    max-width: 300px;
    width: 100%;
    padding: 20px 0 20px 10px;
    font-size: 1rem;
    border: 1px solid var(--purple);
    border-radius: 5px;
  }
  button {
    margin-top: 1rem;
    max-width: 250px;
    width: 100%;
    padding: 15px 0;
    cursor: pointer;
    outline: none;
    background: var(--purple);
    font-size: 1rem;
    text-transform: capitalize;
    color: var(--text);
    font-weight: bold;
    border: none;
    border-radius: 5px;
    &:hover,
    &:focus {
      filter: brightness(1.2);
    }
  }
`;
