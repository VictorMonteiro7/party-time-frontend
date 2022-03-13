import { useContext, useState } from "react";
import { Api } from "../../api";
import { Button } from "../../components/Button";
import { ErrorMsg, SuccessMsg } from "../../components/Error/Style";
import { UpdateContainer } from "./Style";
import validator from "validator";
import { Context } from "../../context";
import { useConfereSenha } from "../../hooks/useConfereSenha";

export const Update = () => {
  const [name, setName] = useState<string>("");
  const [newPass, setNewPass] = useState<string>("");
  const [oldPass, setOldPass] = useState<string>("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const token = localStorage.getItem("token");
  const { dispatch } = useContext(Context);
  const conferencia = useConfereSenha(newPass);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name && !newPass && !oldPass) {
      setError("Preencha todos os campos");
      let timer = setTimeout(() => {
        setError("");
        clearTimeout(timer);
      }, 3000);
      return;
    }
    try {
      const StrongPass = validator.isStrongPassword(newPass);
      if (!StrongPass) {
        setError("Senha fraca");
        let timer = setTimeout(() => {
          setError("");
          clearTimeout(timer);
        }, 3000);
        return;
      }
      let { json } = await Api.put("/user", {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password: newPass,
          oldPass,
        }),
      });
      if (json.error) {
        setError(json.error);
        let timer = setTimeout(() => {
          setError("");
          clearTimeout(timer);
        }, 3000);
        return;
      }
      setName("");
      setNewPass("");
      setOldPass("");
      setSuccess("Usuário atualizado com sucesso");
      let timer = setTimeout(() => {
        setSuccess("");
        clearTimeout(timer);
      }, 3000);
      dispatch({
        type: "LOGOUT",
      });
    } catch (err) {
      setError("Ocorreu algum erro");
      let timer = setTimeout(() => {
        setError("");
        clearTimeout(timer);
      }, 3000);
    }
  }
  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleNewPass(e: React.ChangeEvent<HTMLInputElement>) {
    setNewPass(e.target.value);
  }
  function handleOldPassChange(e: React.ChangeEvent<HTMLInputElement>) {
    setOldPass(e.target.value);
  }
  return (
    <UpdateContainer className="leftIn">
      {error !== "" && <ErrorMsg className="rightIn">{error}</ErrorMsg>}
      {success !== "" && <SuccessMsg className="rightIn">{success}</SuccessMsg>}
      <form
        method="post"
        encType="application/x-www-form-urlencoded"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">
          <p>Novo Nome</p>
          <input
            value={name}
            onChange={handleNameChange}
            id="name"
            type="text"
            placeholder="Escreva o novo nome"
          />
        </label>
        <label htmlFor="new-pass">
          <p>Nova Senha</p>
          <input
            value={newPass}
            onChange={handleNewPass}
            id="new-pass"
            type="password"
            placeholder="Escreva a nova senha"
          />
        </label>
        <div style={{ alignSelf: "flex-start" }}>
          {conferencia && (
            <>
              {typeof conferencia === "object" && (
                <>
                  <h3>Sua nova senha precisa ter: </h3>
                  {conferencia.maiusculo && <p>Letra Maiúscula</p>}
                  {conferencia.minusculo && <p>Letra Minúscula</p>}
                  {conferencia.numero && <p>Número</p>}
                  {conferencia.caracteres && <p>Caracteres especiais</p>}
                  {newPass.length < 8 && <p>8 caracteres</p>}
                </>
              )}
            </>
          )}
        </div>
        <label htmlFor="old-pass">
          <p>Senha Atual</p>
          <input
            value={oldPass}
            onChange={handleOldPassChange}
            id="old-pass"
            type="password"
            placeholder="Escreva a senha atual"
          />
        </label>
        <Button>Enviar</Button>
      </form>
    </UpdateContainer>
  );
};
