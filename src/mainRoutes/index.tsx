import { useRoutes } from "react-router-dom";
import { NotFound } from "../components/404";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { User } from "../pages/User";

export const MainRoutes = ()=>{
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
      element: <User/>
    },
    {path: '*', element: <NotFound/>}
  ]);
}
