import { ChangeEvent } from "react"
import { ImagemContainer } from "./Style"

type ImgProps = {
  src: string;
  wdt?: string | number;
  hgt?: string | number;
}
export const Imagem = (props: ImgProps) => {
  function loadedImg(e: ChangeEvent<HTMLImageElement>){
    e.target.classList.remove('skeleton');
  }
  return (
    <picture>
      <ImagemContainer wdt={props.wdt} hgt={props.hgt} src={props.src} className="skeleton" onLoad={loadedImg} />
    </picture>
  )
}