import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";
import { useConfereUser } from "../../hooks/useConfereUser";


type UserType = {
  name: string;
  email: string;
  _id: string;
}

export const User = ()=>{
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const {confereUser} = useConfereUser();
  const [dados, setDados] = useState<UserType>({name: '', email: '', _id: ''})
  const {dispatch} = useContext(Context)
  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
    (async function conferencia(){
      try{
        const res = await confereUser();
        if (res === null){
          localStorage.removeItem('token');
          dispatch({
            type: 'LOGOUT'
          })
          navigate('/')
        }
        setDados(res);
      } catch(err){
        localStorage.removeItem('token');
        dispatch({
          type: 'LOGOUT'
        })
        navigate('/')
      }
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
      {dados &&       
        <h1>{dados.name}</h1>
      }
    </div>
  )
}