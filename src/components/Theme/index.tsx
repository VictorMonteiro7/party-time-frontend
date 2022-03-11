import React, { useContext, useEffect, useState } from 'react'
import {ThemeProvider} from 'styled-components'
import {DarkTheme, LightTheme} from './themes'
import GlobalStyle from './Style'
import { Context } from '../../context'
export const ThemeSelect: React.FC = ({children})=>{
  const localLight = localStorage.getItem('isLight');
  const [initialTheme, setInitialTheme] = useState(localLight === 'true' ? true : false);
  const {state} = useContext(Context)
  useEffect(()=>{
    setInitialTheme(state.themeDark)
    localStorage.setItem('isLight',state.themeDark.toString())
  },[state.themeDark])

  return (
    <ThemeProvider theme={initialTheme ? LightTheme : DarkTheme}>
      <GlobalStyle/>
        {children}
    </ThemeProvider>
  )
}