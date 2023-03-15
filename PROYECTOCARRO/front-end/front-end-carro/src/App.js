import * as React from "react"; 
import { Routes, Route } from 'react-router-dom';
import NavBar from "../src/componentes/navbar/NavBar";
import Carro from "../src/componentes/paginas/carro/Carro";
import Principal from "../src/componentes/paginas/inicio/Principal"; 
import EditarCarro from "./componentes/paginas/carro/EditarCarro";
import ListadoCarro from "./componentes/paginas/carro/ListadoCarro";
import Color from "./componentes/paginas/color/Color";
import ListadoColor from "./componentes/paginas/color/ListadoColor";
import ListadoMarca from "./componentes/paginas/marca/ListadoMarca";
import Marca from "./componentes/paginas/marca/Marca"; 
import ListadoPais from "./componentes/paginas/pais/ListadoPais";
import Pais from "./componentes/paginas/pais/Pais";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/carro" element={<Carro />} />  
          <Route path="/listado-carro" element={<ListadoCarro />} />
          <Route path="/editar-carro" element={<EditarCarro />} />
          <Route path="/marca" element={<Marca />} />
          <Route path="/listado-marca" element={<ListadoMarca />} />
          <Route path="/color" element={<Color />} />
          <Route path="/listado-color" element={<ListadoColor />} />
          <Route path="/pais" element={<Pais />} />
          <Route path="/listado-pais" element={<ListadoPais />} />
        </Routes>        
      </div>
    );
  }
}

export default App;
