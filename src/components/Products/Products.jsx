import { Grid2 } from "@mui/material";
import { CardsProductsTotal } from "./CardsProductsTotal";
export const Products = () => {
  return (
    <div className="products-total-container">
      <h3 className="product-total-title">Productos Destacados</h3>
      <Grid2
        sx={{ padding: 5, justifyContent: "center", alignItems: "center" }}
        size={7}
        container
        spacing={4}
      >
        <CardsProductsTotal />
      </Grid2>
    </div>
  );
};
