import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate

export const NavBarItems = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate(); // Inicializamos el hook useNavigate

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabClick = (route) => {
    navigate(route); // Usamos navigate para cambiar de ruta
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Header />

      <Box
        bgcolor={"#ffe600"}
        display={"flex"}
        justifyContent={"center"}
        sx={{ width: "100%" }}
        color={"green"}
        fontSize={100}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="white"
            fontSize="100"
          >
            <Tab
              label="Inicio"
              onClick={() => handleTabClick("/")} // Redirigimos al hacer click
              {...a11yProps(0)}
              sx={{ fontSize: "1rem", fontFamily: "Poppins" }}
            />
            <Tab
              label="Ofertas"
              onClick={() => handleTabClick("/offer")} // Redirigimos al hacer click
              {...a11yProps(0)}
              sx={{ fontSize: "1rem", fontFamily: "Poppins" }}
            />
            <Tab
              label="Productos"
              onClick={() => handleTabClick("/products")} // Redirigimos al hacer click
              {...a11yProps(1)}
              sx={{ fontSize: "1rem", fontFamily: "Poppins" }}
            />
            <Tab
              label="Contacto"
              onClick={() => handleTabClick("/contact")} // Redirigimos al hacer click
              {...a11yProps(2)}
              sx={{ fontSize: "1rem", fontFamily: "Poppins" }}
            />
            <Tab
              label="Ayuda"
              onClick={() => handleTabClick("/help")} // Redirigimos al hacer click
              {...a11yProps(3)}
              sx={{ fontSize: "1rem", fontFamily: "Poppins" }}
            />
          </Tabs>
        </Box>
      </Box>
    </>
  );
};
