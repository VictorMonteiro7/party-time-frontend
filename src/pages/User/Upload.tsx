import { useContext, useState } from "react";
import { Api } from "../../api";
import { Button } from "../../components/Button";
import { ErrorMsg, SuccessMsg } from "../../components/Error/Style";
import { Imagem } from "../../components/Imagem";
import { Context } from "../../context";
import { UploadContainer } from "./Style";

export const Upload = () => {
  const [imagem, setImagem] = useState<File[]>([]);
  const [titulo, setTitulo] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [data, setData] = useState<string>("");
  const [privado, setPrivado] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const token = localStorage.getItem("token");
  const { state, dispatch } = useContext(Context);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({
      type: "LOADING",
    });
    if (!titulo || !descricao || !data || !url) {
      setError("Preencha todos os campos");
      let timer = setTimeout(() => {
        setError("");
        clearTimeout(timer);
      }, 3000);
      dispatch({
        type: "LOADING",
      });
      return;
    }
    try {
      const formData = new FormData();
      for (let img of imagem) {
        formData.append("photos", img, img.name);
      }
      formData.append("title", titulo);
      formData.append("description", descricao);
      formData.append("date", data);
      formData.append("privacy", privado.toString());

      let { json } = await Api.post("/party", {
        headers: {
          Authorization: `${token}`,
        },
        body: formData,
      });
      if (json.error) {
        setError(json.error);
        let timer = setTimeout(() => {
          setError("");
          clearTimeout(timer);
        }, 3000);
        dispatch({
          type: "LOADING",
        });
        return;
      }
      setTitulo("");
      setDescricao("");
      setData("");
      setImagem([]);
      setUrl("");
      setPrivado(false);
      setSuccess("Evento criado com sucesso!");
      let timer = setTimeout(() => {
        setSuccess("");
        clearTimeout(timer);
      }, 3000);
      dispatch({
        type: "LOADING",
      });
    } catch (err) {
      setError("Ocorreu algum erro");
      let timer = setTimeout(() => {
        setError("");
        clearTimeout(timer);
      }, 3000);
      dispatch({
        type: "LOADING",
      });
    }
  }
  function handleTituloChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitulo(e.target.value);
  }
  function handleDescricaoChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDescricao(e.target.value);
  }
  function handleDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData(e.target.value);
  }
  function handlePrivadoChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPrivado(e.target.checked);
  }
  function handleImagemChange(e: React.ChangeEvent<HTMLInputElement>) {
    let arquivos = e.target.files;
    let arquivosArray: any[] = [];
    let urls: string[] = [];
    if (arquivos) {
      for (let arquivo of Array.from(arquivos)) {
        arquivosArray.push(arquivo);
        let reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target) {
            urls.push(e.target.result as string);
            setImagem(arquivosArray);
            setUrl(urls[0]);
          }
        };
        reader.readAsDataURL(arquivo);
      }
    }
  }
  return (
    <UploadContainer className="leftIn">
      {error !== "" && <ErrorMsg className="rightIn">{error}</ErrorMsg>}
      {success !== "" && <SuccessMsg className="rightIn">{success}</SuccessMsg>}
      <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
        <label htmlFor="title">
          <p>Título</p>
          <input
            value={titulo}
            onChange={handleTituloChange}
            id="title"
            type="text"
            placeholder="Escreva um título"
          />
        </label>
        <label htmlFor="description">
          <p>Descrição</p>
          <input
            value={descricao}
            onChange={handleDescricaoChange}
            id="description"
            type="text"
            placeholder="Escreva uma descrição"
          />
        </label>
        <label htmlFor="date">
          <p>Data</p>
          <input
            value={data}
            onChange={handleDataChange}
            id="date"
            type="date"
          />
        </label>
        <label htmlFor="privacy">
          <p style={{ display: "inline-flex", marginRight: "5px" }}>
            Privado?{" "}
          </p>
          <input
            value={0}
            onChange={handlePrivadoChange}
            id="privacy"
            type="checkbox"
          />
        </label>
        <label htmlFor="photos">
          <p>Fotos (máximo 5 imagens de 5mb cada)</p>
          <input
            multiple
            onChange={handleImagemChange}
            id="photos"
            type="file"
          />
        </label>
        {state.isLoading ? (
          <Button className="loading">Enviando</Button>
        ) : (
          <Button>Enviar</Button>
        )}
      </form>
      <div>
        <h3>Veja a prévia de uma imagem</h3>
        {url && <Imagem src={url} />}
      </div>
    </UploadContainer>
  );
};
