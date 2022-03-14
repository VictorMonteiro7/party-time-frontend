import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../context";
import { useConfereUser } from "../../hooks/useConfereUser";
import { PartyTypes } from "../../types";
import { IconsContainer, UserContainer } from "./Style";
import { ReactComponent as Upload } from "../../img/upload.svg";
import { ReactComponent as Update } from "../../img/update.svg";
import { ReactComponent as Feed } from "../../img/feed.svg";
import { UserRoutes } from "./UserRoutes";
import { Loading } from "../../components/Loading";

type UserType = {
  name: string;
  email: string;
  _id: string;
};

export const User = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { confereUser } = useConfereUser();
  const [dados, setDados] = useState<UserType>({
    name: "",
    email: "",
    _id: "",
  });
  const { dispatch } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    (async function conferencia() {
      setIsLoading(true);
      try {
        const res = await confereUser();
        if (res === null) {
          localStorage.removeItem("token");
          dispatch({
            type: "LOGOUT",
          });
          navigate("/");
        }
        setDados(res);
        localStorage.setItem("userId", res._id);
      } catch (err) {
        dispatch({
          type: "LOGOUT",
        });
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading)
    return (
      <div className="content">
        <Loading />
      </div>
    );
  return (
    <UserContainer className="content ">
      {dados && <h1>Seja bem vindo, {dados.name}!</h1>}
      <h3>O que vamos fazer agora?</h3>
      <IconsContainer>
        <NavLink to="upload">
          <p>Upload</p>
          <Upload />
        </NavLink>
        <NavLink to="update">
          <p>Update</p>
          <Update />
        </NavLink>
        <NavLink to="./">
          <p>Feed Pessoal</p>
          <Feed />
        </NavLink>
      </IconsContainer>
      <UserRoutes />
    </UserContainer>
  );
};
