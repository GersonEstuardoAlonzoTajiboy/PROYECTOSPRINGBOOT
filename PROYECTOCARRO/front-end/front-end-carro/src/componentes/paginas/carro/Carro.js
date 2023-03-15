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

function Carro() {
  
  const navigate = useNavigate();
  const [carro, setCarro] = useState({
    modelo: "",
    marca: "",
    color: "",
    placa: "",
    paisOrigen: "",
    fechaCirculacion: "",
    observaciones: ""
  });

  const guardarCarro = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(carro);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    var resultado = await fetch(
      "http://localhost:8095/carro/crear",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("Error ", error));

    console.log("Resultado: ", resultado);
    alert("Datos Guardados Correctamente .....");
    navigate("/listado-carro");
  };

  const handleOnChange = (evento) => {
    console.log("Event: ", evento);
    const { name, value } = evento.target;
    setCarro({ ...carro, [name]: value });
  };

  const mostrarListado = () => {
    navigate("/listado-carro");
  };

  return (
    <>
    <Button variant="contained" onClick={mostrarListado} style={{margin: 10}}>Mostrar Listado de Carros</Button>
      <Container>
        <Typography variant="h4">Agregar Carro</Typography>
        <FormControl>
          <InputLabel>Modelo</InputLabel>
          <Input name="modelo" value={carro.modelo} onChange={handleOnChange} />
        </FormControl>
        <FormControl>
          <InputLabel>Marca</InputLabel>
          <Input name="marca" value={carro.marca} onChange={handleOnChange} />
        </FormControl>
        <FormControl>
          <InputLabel>Color</InputLabel>
          <Input name="color" value={carro.color} onChange={handleOnChange} />
        </FormControl>
        <FormControl>
          <InputLabel>Placa</InputLabel>
          <Input name="placa" value={carro.placa} onChange={handleOnChange} />
        </FormControl>
        <FormControl>
          <InputLabel>Pais de Origen</InputLabel>
          <Input name="paisOrigen" value={carro.paisOrigen} onChange={handleOnChange} />
        </FormControl>
        <FormControl>
          <InputLabel>Fecha Circulacion</InputLabel>
          <Input
            name="fechaCirculacion"
            value={carro.fechaCirculacion}
            onChange={handleOnChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Observaciones</InputLabel>
          <Input name="observaciones" value={carro.observaciones} onChange={handleOnChange} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={guardarCarro}>
            Guardar
          </Button>
        </FormControl>
      </Container>
    </>
  );
}

export default Carro;
