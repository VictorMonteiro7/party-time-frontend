import styled from "styled-components";
export const ErrorMsg = styled.button`
  padding: 20px;
  background: red;
  color: var(--white);
  font-weight: bold;
  font-family: var(--Montserrat);
  font-size: 1rem;
  position: absolute;
  right: 5%;
  top: 5%;
  border: none;
  border-radius: 5px;
  pointer-select: none;
`;

export const SuccessMsg = styled(ErrorMsg)`
  background: var(--green);
  color: var(--black);
`;
