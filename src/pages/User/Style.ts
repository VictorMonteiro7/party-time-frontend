import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconsContainer = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 3rem;
  & > a > svg {
    width: 150px;
    height: 150px;
  }
  & > a > p {
    text-align: center;
  }
`;

export const FeedGrid = styled.div`
  display: grid;
  margin: 2rem auto;
  max-width: 800px;
  justify-items: center;
  grid-template-columns: repeat(2, minmax(300px, 500px));
  grid-gap: 20px;
  h3 {
    font-weight: 400;
  }
  & > a {
    max-width: 340px;
    padding: 20px;
    border: 1px solid;
  }
`;

export const UploadContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    place-self: flex-start;
    padding-top: 3rem;
    & img {
      margin-top: 2rem;
      display: block;
      border: 3px double;
    }
  }
  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    margin: 2rem 0;
    position: relative;
    & > label #photos::-webkit-file-upload-button {
      visibility: hidden;
    }
    & > label #photos::before {
      content: "Selecione os arquivos";
      cursor: pointer;
      background: var(--purple);
      color: var(--white);
      width: 80%;
      display: inline-flex;
      font-size: 1rem;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      height: 100%;
      white-space: nowrap;
      height: 45px;
    }
    & > button {
      max-width: unset;
      width: 100%;
    }
    & > label {
      width: 100%;
      & input:not(:is([type="checkbox"], [type="file"])) {
        width: 100%;
        height: 45px;
        padding: 10px 0 10px 10px;
        font-size: 1rem;
      }
    }
  }
`;
