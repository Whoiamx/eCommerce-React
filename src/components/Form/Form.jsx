import { TextField } from "@mui/material";

export const Form = () => {
  return (
    <div>
      <TextField
        required
        id="outlined-required"
        label="Ingresa tu nombre completo"
      />
      <TextField required id="outlined-required" label="Ingresa tu email" />
      <TextField required id="outlined-required" label="Ingresa tu celular" />
    </div>
  );
};
