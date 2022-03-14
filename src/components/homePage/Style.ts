import styled from "styled-components";

export const MainGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px 20px;
  padding: 50px 0;
  justify-items: center;
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    @media (max-width: 768px) {
      & > :is(h2, h3, p) {
        place-self: flex-start;
      }
    }
    & > h3 {
      font-weight: 500;
    }
  }
`;
