import { ThemeType } from "./themes";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  :root{
    --bg: ${({ theme }: ThemeType) => theme && theme.background};
    --text: ${({ theme }: ThemeType) => theme && theme.text};
  }
  body{
    background: var(--bg);
    color: var(--text);
  }
`;
