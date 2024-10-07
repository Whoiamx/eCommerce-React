import { CardsProductsOffer } from "./CardsProductsOffer";

export const ProductOffer = () => {
  return (
    <>
      <div className="product-offer-container">
        <h2>Productos en Oferta</h2>
      </div>
      <div className="cards-container">
        <CardsProductsOffer />
      </div>
    </>
  );
};
