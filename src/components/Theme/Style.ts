import { ThemeType } from "./themes";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    word-break: break-all;
  }
  :root{
    --bg: ${({ theme }: ThemeType) => theme && theme.background};
    --text: ${({ theme }: ThemeType) => theme && theme.text};
    --black: #0e0e0e;
    --purple: #83a;
    --white: #fefefe;
    --max-width: 67.5rem;
    --Montserrat: 'Montserrat', sans-serif;
    --Roboto: 'Roboto', sans-serif;
  }
  body{
    background: var(--bg);
    color: var(--text);
    font-family: var(--Montserrat)
  }
  .content {
    max-width: var(--max-width);
    margin: 0 auto;
    min-height: calc(100vh - 145px);
  }
  p,a,li{
    color: var(--text);
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  .skeleton{
    background: #ccc;
    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-size: 200%;
    animation: skeleton-animation 1.2s infinite linear;
    @keyframes skeleton-animation {
      to {
        background-position: -200%;
      }
    }
  }
`;
