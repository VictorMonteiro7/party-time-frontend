import { useContext } from "react";
import { Context } from "../context";
import { ThemeButton } from "./Style";

export const SetarTema = () => {
  const {state, dispatch} = useContext(Context);
  const setarTema = ()=>{
   dispatch({
      type: 'TOGGLE_THEME',
   })
   localStorage.setItem('isLight', state.themeDark.toString());
  }
  return (
    <ThemeButton onClick={setarTema} isLight={state.themeDark}></ThemeButton>
  )
}