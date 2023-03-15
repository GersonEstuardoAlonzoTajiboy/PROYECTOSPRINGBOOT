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

function Marca() {

  const navigate = useNavigate();
  const [marca, setMarca] = useState({
    nombre: "",
    pais: "",
  });

  const guardarMarca = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(marca);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    var resultado = await fetch(
      "http://localhost:8095/marca/crear",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("Error ", error));

    console.log("Resultado: ", resultado);
    alert("Datos Guardados Correctamente .....");
    navigate("/listado-marca");
  };

  const handleOnChange = (evento) => {
    console.log("Event: ", evento);
    const { name, value } = evento.target;
    setMarca({ ...marca, [name]: value });
  };

  const mostrarListado = () => {
    navigate("/listado-marca");
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={mostrarListado}
        style={{ margin: 10 }}
      >
        Mostrar Listado de Marcas
      </Button>
      <Container>
        <Typography variant="h4">Agregar Marca</Typography>
        <FormControl>
          <InputLabel>Nombre</InputLabel>
          <Input name="nombre" value={marca.nombre} onChange={handleOnChange} />
        </FormControl>
        <FormControl>
          <InputLabel>Pais</InputLabel>
          <Input name="pais" value={marca.pais} onChange={handleOnChange} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={guardarMarca}>
            Guardar
          </Button>
        </FormControl>
      </Container>
    </>
  );
}

export default Marca;
