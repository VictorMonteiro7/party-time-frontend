import React from 'react'
import {SetarTema} from '../../hooks/useSetarTema'
import { HeaderDiv } from './Style'
export const Header: React.FC = ()=>{
  return (
    <HeaderDiv>
      <h1>Party Time</h1>
      <SetarTema/>
    </HeaderDiv>
  )
}