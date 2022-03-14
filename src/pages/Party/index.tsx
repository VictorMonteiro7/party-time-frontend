import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Api } from "../../api";
import { Button } from "../../components/Button";
import { Imagem } from "../../components/Imagem";
import { Loading } from "../../components/Loading";
import { Context } from "../../context";
import { PartyTypes } from "../../types";
import { PartyGrid } from "./Style";

export const Party = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const { state, dispatch } = useContext(Context);
  const [dados, setDados] = useState<PartyTypes>();
  const [error, setError] = useState<string>();
  const [activePhoto, setActivePhoto] = useState(0);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token && !state.isLogged) return navigate("/login");
    pegaFesta();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pegaFesta = async () => {
    dispatch({
      type: "LOADING",
    });
    try {
      if (token) {
        const { json } = await Api.get(`/user/party/${id}`, token.toString());
        if (json.error) return setError(json.error);
        setDados(json);
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({
        type: "LOADED",
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Digite a senha");
      return null;
    }
    dispatch({
      type: "LOADING",
    });
    try {
      const { json } = await Api.delete(`/user/party/${id}`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
        }),
      });
      if (json.error) return setError(json.error);
      dispatch({
        type: "LOADED",
      });
      navigate("/");
    } catch (err) {
    } finally {
      dispatch({
        type: "LOADED",
      });
    }
  };

  if (state.isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (!dados)
    return (
      <div className="content">
        <h3>{error}</h3>
      </div>
    );
  const dadosData = new Date(dados.date).toLocaleDateString("pt-BR");
  return (
    <PartyGrid className="content">
      <div className="party-imgs">
        <Imagem src={dados.photos[activePhoto]} />
        {dados.photos.length > 1 && (
          <div>
            {dados.photos.map((photo, index) => (
              <img
                alt={dados.title}
                key={index}
                src={photo}
                onClick={() => setActivePhoto(index)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="party-info-text">
        <h2>{dados.title}</h2>
        <p>{dados.description}</p>
        <p>
          O evento foi uma {dados.privacy ? "festa privada" : "festa pública"}
        </p>
        <p>Realizada em {dadosData}</p>
        {userId && userId === dados.userId && (
          <fieldset>
            <legend>Deseja apagar a festa?</legend>
            <label htmlFor="password">
              <input
                id="password"
                type="password"
                placeholder="Digite a sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p>{error}</p>}
            </label>
            <Button
              className={`${state.isLoading && "loading"}`}
              onClick={handleSubmit}
              style={{ backgroundColor: "red" }}
            >
              {state.isLoading ? "Carregando..." : "Deletar postagem"}
            </Button>
          </fieldset>
        )}
      </div>
    </PartyGrid>
  );
};
