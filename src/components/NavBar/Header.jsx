import { Button } from "@mui/material";
import favicon from "../../assets/favicon.ico";

export const Header = () => {
  return (
    <div className="header">
      <span className="max-letter">Kick</span>
      <img className="favicon" src={favicon} />
      <input id="input-search" type="search"></input>
      <Button
        sx={{
          backgroundColor: "#2e7d32",
          color: "#FFF",
          borderRadius: "100px",
        }}
        variant="outlined"
        href="#outlined-buttons"
      >
        {"Buscar"}
      </Button>
    </div>
  );
};
