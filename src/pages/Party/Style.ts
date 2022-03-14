import styled from "styled-components";

export const PartyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 60% 1fr);
  grid-gap: 1rem;
  padding-top: 5%;
  & > div > picture img {
    height: auto;
    cursor: pointer;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  & > div > div {
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
    & > img {
      width: 100%;
      border: 0.5px solid;
      cursor: pointer;
    }
  }
  & .party-info-text {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    fieldset {
      padding: 10px;
      display: flex;
      flex-direction: column;
      row-gap: 2rem;
      & > label {
        font-size: 1.2rem;
        width: 100%;
      }
      & input {
        height: 45px;
        width: 100%;
        padding: 5px 0 5px 5px;
        font-size: 1rem;
      }
    }
    & button {
      max-width: 300px;
      justify-self: flex-end;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;
    & fieldset {
      margin-top: 5rem;
    }
    & > div > picture img {
      width: 100%;
    }
  }
`;
