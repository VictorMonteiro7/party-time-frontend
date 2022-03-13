import styled from "styled-components";

export const Loading = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  margin: 25% auto 0 auto;
  border: 10px solid var(--text);
  border-top-color: var(--purple);
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
