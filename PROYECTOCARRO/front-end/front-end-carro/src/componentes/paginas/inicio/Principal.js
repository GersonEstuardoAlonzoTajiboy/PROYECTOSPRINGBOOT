import React from "react";
import { FormGroup, styled, Typography } from "@mui/material";
import imagenUno from "../../imagenes/1.jfif";
import imagenDos from "../../imagenes/2.jfif";
import imagenTres from "../../imagenes/3.jfif";  

const Container = styled(FormGroup)`
  width: 40%;
  margin: 2% auto 0 auto;
  text-aling: center;
  & > div {
    margin-top: 20px;
  }
`;

function Principal() {
  
  return (
    <>
      <Container>
        <Typography variant="h4">Coleccion de Automoviles</Typography> <br/>
        <img src={imagenUno} /> <br/>
        <img src={imagenDos} /> <br/>
        <img src={imagenTres} /> <br/>
      </Container>
    </>
  );
}

export default Principal;
