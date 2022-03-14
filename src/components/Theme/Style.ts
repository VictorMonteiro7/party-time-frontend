import { ThemeType } from "./themes";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    word-break: break-word;
  }
  :root{
    --bg: ${({ theme }: ThemeType) => theme && theme.background};
    --text: ${({ theme }: ThemeType) => theme && theme.text};
    --black: #0e0e0e;
    --purple: #83a;
    --white: #fefefe;
    --green: #37e218;
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
  p,a,li,button{
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

  .loading{
    color: var(--white) !important;
    cursor: progress !important;
    filter: brightness(.8) !important;
    pointer-events: none !important;
  }

  .leftIn{
    animation: leftIn 0.5s forwards;
  }
  @keyframes leftIn {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100%{
      opacity: 1;
      transform: translateX(0)
    }
  }
  .rightIn{
    animation: rightIn 0.5s forwards;
  }
  @keyframes rightIn {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    100%{
      opacity: 1;
      transform: translateX(0)
    }
  }
  @media (max-width: 768px) {
    :root{
      --max-width: 300px;
    }
    html{
      font-size: 75%;
    }
  }
`;
