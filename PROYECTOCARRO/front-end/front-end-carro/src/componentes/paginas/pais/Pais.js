import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 2% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

function Pais() {

  const navigate = useNavigate();
  const [pais, setPais] = useState({
    nombre: "",
    continente: ""
  });

  const guardarPais = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(pais);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    var resultado = await fetch(
      "http://localhost:8095/pais/crear",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("Error ", error));

    console.log("Resultado: ", resultado);
    alert("Datos Guardados Correctamente .....");
    navigate("/listado-pais");
  };

  const handleOnChange = (evento) => {
    console.log("Event: ", evento);
    const { name, value } = evento.target;
    setPais({ ...pais, [name]: value });
  };

  const mostrarListado = () => {
    navigate("/listado-pais");
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={mostrarListado}
        style={{ margin: 10 }}
      >
        Mostrar Listado de Paises
      </Button>
      <Container>
        <Typography variant="h4">Agregar Pais</Typography>
        <FormControl>
          <InputLabel>Nombre</InputLabel>
          <Input name="nombre" value={pais.nombre} onChange={handleOnChange} />
        </FormControl>
        <FormControl>
          <InputLabel>Continente</InputLabel>
          <Input name="continente" value={pais.continente} onChange={handleOnChange} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={guardarPais}>
            Guardar
          </Button>
        </FormControl>
      </Container>
    </>
  );
}

export default Pais;
