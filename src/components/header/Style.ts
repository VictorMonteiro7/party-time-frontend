import styled from "styled-components";

export const HeaderDiv = styled.header`
  height: 100px;
`;
export const NavHeader = styled.nav`
  display: flex;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  height: inherit;
  justify-content: flex-end;
  position: relative;
  align-items: center;
  ul {
    display: flex;
    column-gap: 10px;
    li:hover > a {
      background: var(--purple);
      color: var(--white);
    }
    li > a {
      padding: 10px;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
      &:active,
      &.ativo {
        background-color: var(--purple);
        color: var(--white);
      }
    }
  }
`;
