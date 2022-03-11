import { Api } from "../api";

export const useConfereUser = () => {
  let token = localStorage.getItem('token');

  async function confereUser(){
    if(!token) return null;
    const {json, res} = await Api.get('/user', token);
    if(res.status !== 200) return null;
    return json;
  }
  return {confereUser}
}