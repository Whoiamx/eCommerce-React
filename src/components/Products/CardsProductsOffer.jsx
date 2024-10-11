import { memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Cards } from "./Cards";

export const CardsProductsOffer = memo(() => {
  const { data } = useFetch("https://fakestoreapi.com/products?limit=5");

  return (
    <>
      <Cards info={data} />
    </>
  );
});
