import { Button, Modal, TextField } from "@mui/material";
import { Formik } from "formik";
import { ModalSendForm } from "./ModalSendForm";

export const Form = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "", name: "", phone: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "El dato es obligatorio";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email invalido!";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 600);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              required
              label="Nombre completo"
              type="text"
              name="firstname"
              onChange={handleChange}
              onBlur={handleBlur}
              className="input-form"
              sx={{ backgroundColor: "white" }}
            />
            <TextField
              required
              label="Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="input-form"
              sx={{ backgroundColor: "white" }}
            />

            <TextField
              required
              type="phone"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              className="input-form"
              label="Telefono de contacto"
              sx={{ backgroundColor: "white" }}
            />

            <TextField
              label="Dejanos tu comentario"
              id="outlined-required"
              className="input-form"
              sx={{ backgroundColor: "white" }}
            />
            {isSubmitting ? <ModalSendForm /> : null}
            <Button
              className="input-form"
              type="submit"
              disabled={isSubmitting}
              variant="contained"
              color="success"
            >
              Enviar consulta
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};
