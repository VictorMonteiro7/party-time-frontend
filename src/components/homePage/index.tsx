import { useContext, useEffect, useState } from "react";
import { Api } from "../../api";
import { Context } from "../../context";
import { PartyTypes, PartyUserTypes } from "../../types";
import { Imagem } from "../Imagem";
import { Loading } from "../Loading";
import { MainGrid } from "./Style";

export const HomePage = () => {
  let token: string = localStorage.token;
  const { state } = useContext(Context);
  const [dataApi, setDataApi] = useState<PartyUserTypes>();
  let parties: PartyTypes[] = [];
  let endpoint = state.isLogged ? "/user/parties" : "/parties";
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    apiGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isLogged]);

  async function apiGet() {
    setIsLoading(true);
    try {
      const { json } = await Api.get(endpoint, token && token);
      if (json.message) return null;
      if (state.isLogged) {
        setDataApi(json);
      } else {
        setDataApi({
          parties: json,
        });
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }

  (function adicionaFesta() {
    if (dataApi !== undefined) {
      dataApi.parties.forEach((party) => {
        parties.push(party);
      });
      if (dataApi.privateParties) {
        dataApi.privateParties.forEach((party) => {
          parties.push(party);
        });
      }
    }
  })();

  if (isLoading) return <Loading />;
  return (
    <MainGrid className="leftIn">
      {parties.length > 0 && (
        <>
          {parties.map((item) => {
            let date = new Date(item.date).toLocaleDateString("pt-BR");
            return (
              <div key={item._id}>
                <Imagem src={item.photos[0]} />
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
                <p>{date}</p>
              </div>
            );
          })}
        </>
      )}
      {parties.length === 0 && <h1>Nenhum evento cadastrado</h1>}
    </MainGrid>
  );
};
