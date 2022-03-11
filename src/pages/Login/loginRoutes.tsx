import { LoginForm } from './LoginForm';
import {useRoutes} from 'react-router-dom';
import { NotFound } from '../../components/404';
import { RegisterForm } from './RegisterForm';

export const LoginRoutes = ()=>{
  return useRoutes([
    {
      path: '/',
      element: <LoginForm/>
    },
    {
      path: '/register',
      element: <RegisterForm/>
    },
    {path: '*', element: <NotFound/>}
  ])
}