import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMsg } from "../../components/Error/Style";
import { Form } from "../../components/Form";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (token) {
      navigate("/user");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleRegister(props: any) {
    if (props.error) {
      setError(props.error);
      let tiraError = setTimeout(() => {
        setError("");
        clearTimeout(tiraError);
      }, 3000);
    }
    if (props.token) {
      navigate("/user");
    }
  }
  return (
    <>
      <div
        className="leftIn"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Faça Login</h1>
        {error && <ErrorMsg className="rightIn">{error}</ErrorMsg>}
        <Form
          handleFuncao={handleRegister}
          mth="POST"
          end="/login"
          data={{ body: { email, password } }}
        >
          <label htmlFor="user">
            <p>Usuário</p>
            <input
              type="text"
              id="user"
              name="email"
              placeholder="Digite seu email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <label htmlFor="pass">
            <p>Senha</p>
            <input
              type="password"
              id="pass"
              name="password"
              placeholder="Sua senha"
              value={password}
              onChange={handlePassChange}
            />
          </label>
          {isLoading ? (
            <button style={{ color: "var(--white)", cursor: "progress" }}>
              Carregando
            </button>
          ) : (
            <button style={{ color: "var(--white)" }}>Entrar</button>
          )}
        </Form>
        <br />
        <p>Não é cadastrado?</p>
        <br />
        <Link to="./register">Registrar</Link>
      </div>
    </>
  );
};
