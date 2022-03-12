import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMsg } from "../../components/Error/Style";
import { Form } from "../../components/Form";
import { Context } from "../../context";

export const RegisterForm = ()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const {dispatch} = useContext(Context);
  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  function handleRegister(props: any){
    if(props.error){
      setError(props.error)
      let tiraError = setTimeout(()=>{
        setError('')
        clearTimeout(tiraError)
      }, 3000)
    }
    if(props.token){
      dispatch({
        type: 'LOGIN',
      })
      navigate('/user')
    }
  }
  return (
    <div className="leftIn" style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>    
    <h1>Faça seu cadastro</h1>
    {error && <ErrorMsg className="rightIn">{error}</ErrorMsg>}
        <Form mth="POST" end="/register" data={{body: {name, email, password}}} handleFuncao={handleRegister}>
        <label htmlFor="user">
            <p>Usuário</p>
            <input type="text" id="user" name="email" placeholder="Nome de usuário" value={name} onChange={handleNameChange}  />
          </label>
          <label htmlFor="email">
            <p>Email</p>
            <input type="text" id="email" name="email" placeholder="Email de usuário" value={email} onChange={handleEmailChange}  />
          </label>
          <label htmlFor="pass">
            <p>Senha</p>
            <input type="password" id="pass" name="password" placeholder="Sua senha" value={password} onChange={handlePassChange} />
          </label>
            <button>Registrar</button>
        </Form>
        <br/>
        <Link to="../">Voltar para Login</Link>
    </div>
  )
}