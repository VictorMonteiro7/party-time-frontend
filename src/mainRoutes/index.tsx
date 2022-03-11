import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";

export const MainRoutes = ()=>{
  return useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {path: '*', element: <div>404</div>}
  ]);
}
