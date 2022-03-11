import React from 'react'
import {SetarTema} from '../../hooks/useSetarTema'
import { HeaderDiv, NavHeader } from './Style'
import {NavLink} from 'react-router-dom'
export const Header: React.FC = ()=>{
  return (
    <HeaderDiv>
      <NavHeader>
        <ul>
          <li>
          <NavLink to="/" className={({isActive})=> isActive ? 'ativo' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({isActive})=> isActive ? 'ativo' : ''}>Fazer login</NavLink>
          </li>
          <li>
            <NavLink to="/cadastro" className={({isActive})=> isActive ? 'ativo' : ''}>Cadastro</NavLink>
          </li>
        </ul>
        <SetarTema />
      </NavHeader>
    </HeaderDiv>
  )
}