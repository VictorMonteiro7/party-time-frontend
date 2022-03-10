import React from 'react'
import {SetarTema} from '../../hooks/useSetarTema'
export const Header: React.FC = ()=>{
  return (
    <header>
      <h1>Party Time</h1>
      <SetarTema/>
    </header>
  )
}