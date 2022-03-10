import { useContext } from "react";
import { Context } from "../context";

export const SetarTema = () => {
  const {state, dispatch} = useContext(Context);
  const setarTema = ()=>{
   dispatch({
      type: 'TOGGLE_THEME',
   })
   localStorage.setItem('isLight', state.themeDark.toString());
  }
  return (
    <button onClick={setarTema}>Mudar Tema</button>
  )
}