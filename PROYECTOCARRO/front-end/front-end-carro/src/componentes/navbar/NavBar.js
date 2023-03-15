import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material"
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111; 
`

const Tabs = styled(NavLink)`
  font-size: 20px; 
  margin-right: 20px; 
  color: inherit; 
  text-decoration: none; 
`

function NavBar() {
  return(
    <>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">Inicio</Tabs>
          <Tabs to="/carro">Carro</Tabs>
          <Tabs to="/marca">Marca</Tabs>
          <Tabs to="/color">Color</Tabs>
          <Tabs to="/pais">Pais</Tabs>
        </Toolbar>
      </Header>
    </>
  );
}

export default NavBar; 
