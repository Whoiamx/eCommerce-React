import { useFetch } from "../../hooks/useFetch";
import { Cards } from "./Cards";

export const CardsProductsOffer = () => {
  const { data } = useFetch("https://fakestoreapi.com/products?limit=5");

  return (
    <>
      <Cards info={data} />
    </>
  );
};
