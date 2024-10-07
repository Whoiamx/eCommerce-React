import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/material";
import { Form } from "./Form";
export const ContactForm = () => {
  return (
    <div className="form-container">
      <h4>Comunicate con nosotros!</h4>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Form />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Box>
    </div>
  );
};
