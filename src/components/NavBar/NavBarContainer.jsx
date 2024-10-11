import React from "react";
import { NavBarItems } from "./NavBarItems";

export const NavBarContainer = () => {
  return (
    <>
      <NavBarItems />
      <div className="container-banner-text">
        <p className="banner-text">
          Envíos Gratis en el Día. Comprá en 12 cuotas sin interés. Aprovechá
          nuestras increíbles ofertas y promociones en millones de productos.
          ¡No te pierdas la oportunidad de comprar lo que más te gusta, con los
          mejores beneficios y sin pagar de más!
        </p>
      </div>
    </>
  );
};
