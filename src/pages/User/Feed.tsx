import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../api";
import { Imagem } from "../../components/Imagem";
import { Loading } from "../../components/Loading";
import { PartyTypes } from "../../types";
import { FeedGrid } from "./Style";

export const Feed = () => {
  const [temFestas, setTemFestas] = useState<PartyTypes[]>([]);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    pegarFestas();
  }, []);
  async function pegarFestas() {
    setLoading(true);
    try {
      const res = await Api.get("/user/parties", token?.toString());
      let festas: PartyTypes[] = [];
      res.json.parties.forEach((festa: PartyTypes) => {
        festas.push(festa);
      });
      res.json.privateParties?.forEach((festa: PartyTypes) => {
        festas.push(festa);
      });
      setTemFestas(festas);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }
  if (loading) return <Loading />;
  return (
    <FeedGrid className="leftIn">
      {temFestas.length > 0 &&
        temFestas.map((festa: PartyTypes) => {
          let data = new Date(festa.date).toLocaleDateString("pt-BR");
          return (
            <Link key={festa._id} to={`/party/${festa._id}`}>
              <Imagem src={festa.photos[0]} />
              <h2>{festa.title}</h2>
              <h3>{festa.description}</h3>
              <p>{data}</p>
            </Link>
          );
        })}
    </FeedGrid>
  );
};
