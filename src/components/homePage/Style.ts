import styled from "styled-components";

export const MainGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px 20px;
  padding: 50px 0;
  justify-content: center;
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    & > h1 {
      text-align: left;
    }
    & > p {
      text-align: left;
    }
  }
`;
