import { memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Cards } from "./Cards";
import { Error404 } from "../../helpers/Error404";

export const CardsProductsOffer = memo(() => {
  const { data, hasError } = useFetch(
    "https://fakestoreapi.com/products?limit=5"
  );

  return <>{hasError ? <Error404 /> : <Cards info={data} />}</>;
});
