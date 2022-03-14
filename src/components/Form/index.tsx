import { ChangeEvent, useContext } from "react";
import { FormContainer } from "./Style";
import validator from "validator";
import { Api } from "../../api";
import { Context } from "../../context";
type FormType = {
  children: any;
  mth: string; //método de envio
  end: string; //endpoint
  data: {
    body: {
      [key: string]: string;
    };
    headers?: any;
  }; //dados
  handleFuncao?: (props: any) => void;
};

export const Form = (props: FormType) => {
  const { dispatch } = useContext(Context);
  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({
      type: "LOADING",
    });
    const validaEmail = validator.isEmail(props.data.body.email);
    if (!validaEmail) {
      dispatch({
        type: "LOADED",
      });
      return alert("Digite um email válido");
    }
    let resposta;
    if (props.data.body.name) {
      resposta = await fazerLogin({
        body: {
          name: props.data.body.name,
          email: props.data.body.email.toLowerCase(),
          password: props.data.body.password,
        },
      });
    } else {
      resposta = await fazerLogin({
        body: {
          email: props.data.body.email.toLowerCase(),
          password: props.data.body.password,
        },
      });
    }
    dispatch({
      type: "LOADED",
    });
    if (resposta.r.status === 400)
      return props.handleFuncao && props.handleFuncao(resposta.json);
    dispatch({
      type: "LOADED",
    });
    localStorage.setItem("token", `Bearer ${resposta.json.token}`);
    dispatch({
      type: "LOGIN",
    });
    if (props.handleFuncao) props.handleFuncao(resposta.json);
  }

  async function fazerLogin(dados: {
    body: { [key: string]: string };
    headers?: any;
  }) {
    let dadosLogin = JSON.stringify(dados.body);
    let data: {} = {};
    if (dados.headers) {
      data = {
        headers: dados.headers,
        body: dadosLogin,
      };
    } else {
      data = {
        headers: {
          "Content-Type": "application/json",
        },
        body: dadosLogin,
      };
    }
    const { json, r } = await Api.post(props.end, data);
    return { json, r };
  }
  return (
    <FormContainer
      onSubmit={handleSubmit}
      method={props.mth}
      encType="application/x-www-form-urlencoded"
    >
      {props.children}
    </FormContainer>
  );
};
