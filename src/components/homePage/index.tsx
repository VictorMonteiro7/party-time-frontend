import { useEffect, useState } from 'react';
import {Api} from '../../api'
import {PartyTypes} from '../../types'
import { Imagem } from '../Imagem';
import { MainGrid } from './Style';

export const HomePage = ()=>{
  const [dataApi, setDataApi] = useState<PartyTypes[]>([]);
  const [total, setTotal] = useState(0);
  useEffect(()=>{
    apiGet();
    (async function teste(){
      const {data} = await Api.get('/parties');
      return setTotal(data.length);
    })()
  },[])

  useEffect(()=>{
    if(total !== 0 && total !== dataApi.length){
      apiGet();
      console.log('mudou')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[total])

  setInterval(()=>{
    (async function teste(){
      const {data} = await Api.get('/parties');
      return setTotal(data.length);
    })()
  },(1000) * 30)

  
  async function apiGet(){
    const {data} = await Api.get('/parties');
    if(data.message) return null;
    setDataApi(data)
  }

  return (
    <MainGrid>
      {dataApi.length > 0 && <>
        {dataApi.map((item)=>{
          let date = new Date(item.date).toLocaleDateString('pt-BR');
          return (
            <div key={item._id}>
              <Imagem src={`https://avatars.githubusercontent.com/u/84861666?s=400&u=1980f4667d52b84816adf47f73fea4cc35f1cd94&v=4`}/>
              <h1>{item.title}</h1>
              <h3>{item.description}</h3>
              <p>{date}</p>
            </div>
          )
        })}
      </>}
    </MainGrid>
  )
}