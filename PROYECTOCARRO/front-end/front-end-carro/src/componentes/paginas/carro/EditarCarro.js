import React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function EditarCarro() {
  const [carro, setCarro] = useState({
    id: "",
    modelo: "",
    marca: "",
    color: "",
    fechaCirculacion: "",
    placa: "",
  });

  const modificarCarros = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(carro);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    var resultado = await fetch(
      "http://localhost:8095/carro/modificar",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    console.log("resultado", resultado);
  };

  const handleOnChange = (event) => {
    console.log("event", event);
    const { name, value } = event.target;
    setCarro({ ...carro, [name]: value });
  };

  return (
    <div>
      <br></br>
      <br></br>
      <h1 align="center">Modificar Registro de Carro</h1>
      <TextField
        fullWidth
        label="ID Carro"
        id="fullWidth"
        name="id"
        value={carro.id}
        onChange={handleOnChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Modelo"
        id="fullWidth"
        name="modelo"
        value={carro.modelo}
        onChange={handleOnChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Marca"
        id="fullWidth"
        name="marca"
        value={carro.marca}
        onChange={handleOnChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Color"
        id="fullWidth"
        name="color"
        value={carro.color}
        onChange={handleOnChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Fecha de Circulacion"
        id="fullWidth"
        name="fechaCirculacion"
        value={carro.fechaCirculacion}
        onChange={handleOnChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Placa"
        id="fullWidth"
        name="placa"
        value={carro.placa}
        onChange={handleOnChange}
        margin="normal"
      />
      <br></br>
      <Button variant="contained" color="success" onClick={modificarCarros}>
        Modificar
      </Button>
      <Button variant="contained" color="error">
        Limpiar
      </Button>
      <br></br>
      <br></br>
    </div>
  );
}
