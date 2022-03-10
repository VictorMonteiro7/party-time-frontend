import React,{useState, useEffect} from 'react'
import {ThemeProvider} from 'styled-components'
import {DarkTheme, LightTheme} from './themes'
import GlobalStyle from './Style'
export const ThemeSelect: React.FC = ({children})=>{
  const localLight = localStorage.getItem('isLight');
  const [isLight, setIsLight] = useState(false)

  useEffect(()=>{
    if(localLight === null){
      localStorage.setItem('isLight', 'true')
      setIsLight(true)
      return;
    }
  },[localLight])
  
  const setarTema = (tema: boolean)=>{
    setIsLight(!(tema))
    localStorage.setItem('isLight', tema.toString())
  }

  return (
    <ThemeProvider theme={isLight ? LightTheme : DarkTheme}>
      <GlobalStyle/>
        {children}
        <button onClick={()=>setarTema(isLight)}>Setar Darktheme</button>
    </ThemeProvider>
  )
}