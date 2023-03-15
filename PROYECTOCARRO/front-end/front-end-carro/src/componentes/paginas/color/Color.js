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

function Color() {

  const navigate = useNavigate();
  const [color, setColor] = useState({
    nombre: "",
  });

  const guardarColor = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(color);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    var resultado = await fetch(
      "http://localhost:8095/color/crear",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("Error ", error));

    console.log("Resultado: ", resultado);
    alert("Datos Guardados Correctamente .....");
    navigate("/listado-color");
  };

  const handleOnChange = (evento) => {
    console.log("Event: ", evento);
    const { name, value } = evento.target;
    setColor({ ...color, [name]: value });
  };

  const mostrarListado = () => {
    navigate("/listado-color");
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={mostrarListado}
        style={{ margin: 10 }}
      >
        Mostrar Listado de Colores
      </Button>
      <Container>
        <Typography variant="h4">Agregar Color</Typography>
        <FormControl>
          <InputLabel>Nombre</InputLabel>
          <Input name="nombre" value={color.nombre} onChange={handleOnChange} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={guardarColor}>
            Guardar
          </Button>
        </FormControl>
      </Container>
    </>
  );
}

export default Color;
