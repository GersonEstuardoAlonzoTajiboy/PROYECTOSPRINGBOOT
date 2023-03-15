import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
  Button,
} from "@mui/material";

const TableModel = styled(TableContainer)`
  width: 50%;
  margin: 50px auto 0px auto;
`;

const Thead = styled(TableRow)`
  background: #000;
  & > th {
    color: #fff;
    font-size: 15px;
  }
`;

export default function ListadoPais() {

  const [listadoPais, setListadoPais] = useState([]);
  const navigate = useNavigate(); 

  const borrarListadoPais = async () => {
    setListadoPais([]);
  };

  const consultarListadoPais = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    var resultado = await fetch(
      "http://localhost:8095/pais/listar",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => console.log("error", error));

    setListadoPais(JSON.parse(resultado));
  };

  const crearRegistroNuevo = () => {
    navigate("/pais"); 
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={consultarListadoPais}
        style={{ margin: 20 }}
      >
        Consultar Datos
      </Button>
      <Button variant="contained" onClick={borrarListadoPais}>
        Vaciar Tabla
      </Button>
      <Button
        variant="contained"
        onClick={crearRegistroNuevo}
        style={{ margin: 20 }}
      >
        Crear Nuevo Registro
      </Button>
      <TableModel component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <Thead>
              <TableCell>NOMBRE</TableCell>
              <TableCell>CONTINENTE</TableCell>
              <TableCell>ACCIONES A REALIZAR</TableCell>
            </Thead>
          </TableHead>
          <TableBody>
            {listadoPais.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nombre}
                </TableCell>
                <TableCell>{row.continente}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" style={{marginRight: 10}} component={Link} to="/editar-carro">
                    Editar
                  </Button>
                  <Button variant="contained">Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableModel>
    </>
  );
}
