import styled from "styled-components";

type ImgProps = {
  wdt?: number | string; // width;
  hgt?: number | string; // height;
};

export const ImagemContainer = styled.img<ImgProps>`
  display: block;
  object-fit: cover;
  width: ${(props) => (props.wdt ? props.wdt : "300px")};
  height: ${(props) => (props.hgt ? props.hgt : "300px")};
`;
