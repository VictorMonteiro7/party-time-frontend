import { useRoutes } from "react-router-dom";
import { Feed } from "./Feed";
import { Update } from "./Update";
import { Upload } from "./Upload";

export const UserRoutes = () => {
  return useRoutes([
    { path: "/", element: <Feed /> },
    { path: "/upload", element: <Upload /> },
    { path: "/update", element: <Update /> },
  ]);
};
