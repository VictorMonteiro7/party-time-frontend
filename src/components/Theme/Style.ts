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
    --max-width: 97.5rem;
  }
  body{
    background: var(--bg);
    color: var(--text);
  }
  .content {
    max-width: var(--max-width);
    margin: 0 auto;
    min-height: calc(100vh - 145px);
  }
`;
