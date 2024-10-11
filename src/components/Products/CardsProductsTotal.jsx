import { memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Cards } from "./Cards";

export const CardsProductsTotal = memo(() => {
  const { data } = useFetch("https://fakestoreapi.com/products?limit=12");
  console.log("Esto es desde data", data);

  return (
    <>
      <Cards info={data} />
    </>
  );
});
