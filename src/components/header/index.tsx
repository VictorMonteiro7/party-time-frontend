import React, { useContext } from 'react'
import {SetarTema} from '../../hooks/useSetarTema'
import { HeaderDiv, NavHeader } from './Style'
import {NavLink, useNavigate} from 'react-router-dom'
import { Context } from '../../context'
export const Header: React.FC = ()=>{
const {state, dispatch} = useContext(Context)
const navigate = useNavigate();
  return (
    <HeaderDiv>
      <NavHeader>
        <ul>
          <li>
          <NavLink to="/" className={({isActive})=> isActive ? 'ativo' : ''}>Home</NavLink>
          </li>
          <li>
            {!state.isLogged ? 
          <NavLink to="/login" className={({isActive})=> isActive ? 'ativo' : ''}>Login / Cadastro</NavLink> 
            :             
            <NavLink to="/user" className={({isActive})=> isActive ? 'ativo' : ''}>Usuário</NavLink>}
          </li>
          {state.isLogged && 
            <li>          
              <NavLink to='#'  onClick={(e)=>{
                e.preventDefault();
                dispatch({
                  type: 'LOGOUT'
                });
                localStorage.removeItem('token');
                navigate('/')
              }}>Sair</NavLink>
            </li>
          }
        </ul>
        <SetarTema />
      </NavHeader>
    </HeaderDiv>
  )
}