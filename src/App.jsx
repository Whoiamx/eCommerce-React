import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBarContainer } from "./components/NavBar/NavBarContainer";
import React from "react";
import { Hero } from "./components/Hero/Hero";
import { ContactForm } from "./components/Form/ContactForm";
import { HelpFooter } from "./components/Footer/HelpFooter";
import { Error404 } from "./helpers/Error404";
import { Products } from "./components/Products/Products";
import { ProductOffer } from "./components/Products/ProductOffer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBarContainer />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/offer" element={<ProductOffer />} />
          <Route path="/help" element={<HelpFooter />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
