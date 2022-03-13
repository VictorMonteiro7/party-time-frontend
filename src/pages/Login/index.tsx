import { LoginArea, LoginContainer } from "./Style";
import { ReactComponent as Music } from "../../img/music.svg";
import { useContext } from "react";
import { Context } from "../../context";
import { LoginRoutes } from "./loginRoutes";
export const Login = () => {
  const { state } = useContext(Context);

  return (
    <LoginContainer isLight={state.themeDark}>
      <Music className="music" />
      <LoginArea isLight={state.themeDark}>
        <LoginRoutes />
      </LoginArea>
    </LoginContainer>
  );
};
