import { Grid2 } from "@mui/material";
import { CardsProductsTotal } from "./CardsProductsTotal";
export const Products = () => {
  return (
    <div className="products-total-container">
      <h3>Productos</h3>
      <Grid2
        sx={{ justifyContent: "center", alignItems: "center" }}
        size={7}
        container
        spacing={4}
      >
        <CardsProductsTotal />
      </Grid2>
    </div>
  );
};
