import { CardsProductsOffer } from "./CardsProductsOffer";

export const ProductOffer = () => {
  return (
    <>
      <div className="product-offer-container">
        <h2 className="product-offer-title">
          Productos en <span className="greenText">Oferta</span>
        </h2>
      </div>
      <div className="cards-container">
        <CardsProductsOffer />
      </div>
    </>
  );
};
