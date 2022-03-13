import styled from "styled-components";

type PropsStyle = {
  isLight: boolean;
};

export const LoginContainer = styled.section<PropsStyle>`
  width: 100%;
  min-height: calc(100vh - 145px);
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  svg.music {
    flex: 1;
    @media (max-width: 768px) {
      max-width: 200px;
    }
  }
  svg.music > *[fill="#8833aa"] {
    fill: var(--purple);
  }
  svg.music > *[fill="#ccc"] {
    fill: var(--text);
  }
`;

export const LoginArea = styled.div<PropsStyle>`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: inherit;
  padding-top: 6rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
