import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBarContainer } from "./components/NavBar/NavBarContainer";
import React from "react";
import { Hero } from "./components/Hero/Hero";
import { ContactForm } from "./components/Form/ContactForm";
import { HelpFooter } from "./components/Footer/HelpFooter";
import { Error404 } from "./helpers/Error404";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBarContainer />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/help" element={<HelpFooter />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
