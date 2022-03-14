import styled from "styled-components";
type Props = {
  isLight: boolean;
};

export const ThemeButton = styled.button<Props>`
  position: absolute;
  left: 10px;
  padding: 10px;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  border: none;
  outline: none;
  background: ${({ isLight }) => (isLight ? "var(--black)" : "var(--white)")};
  color: var(--text);
  cursor: pointer;
  @media (max-width: 768px) {
    right: unset;
    left: 5px;
  }
  &:after {
    content: "";
    border: 1px solid var(--text);
    width: 30px;
    height: 30px;
    background: ${({ isLight }) => (isLight ? "var(--white)" : "var(--black)")};
    background-image: ${({ isLight }) =>
      isLight ? "url(./assets/img/moon.svg)" : "url(./assets/img/sun.svg)"};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: block;
    position: absolute;
    left: -3px;
    top: 0;
    border-radius: 50%;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isLight }) =>
      isLight ? "translateX(0)" : "translateX(100%)"};
  }
`;
