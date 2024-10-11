import { useState } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#edda30",
  color: "black",
  border: "2px solid #000",
  boxShadow: 25,
  p: 5,
  borderRadius: 5,
};

export const ModalSendForm = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ fontSize: 22 }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            ¡Formulario enviado con exito!
          </Typography>
          <Typography id="modal-modal-description" sx={{ fontSize: 15, mt: 2 }}>
            En menos de 10 horas un operador se va a estar contactando con
            usted!
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
