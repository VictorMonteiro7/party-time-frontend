import { useContext } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { NotFound } from "../components/404";
import { Context } from "../context";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { User } from "../pages/User";

export const MainRoutes = ()=>{
  const {state} = useContext(Context);
  return useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login/*",
      element: <Login />
    },
    {
      path: '/user/*',
      element: state.isLogged ? <User/> : <Navigate to="/login"/>
    },
    {path: '*', element: <NotFound/>}
  ]);
}
