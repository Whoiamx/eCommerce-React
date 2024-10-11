import { Formik } from "formik";

export const ContactForm = () => {
  return (
    <div className="form-container">
      <h3 className="form-title">Dejanos tu consulta!</h3>

      <Formik
        initialValues={{ email: "", nombre: "", apellido: "" }}
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
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
            <label>Nombre completo</label>
            <input type="text" name="text" onChange={handleChange} />
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            <label>Telefono de contacto</label>
            <input
              type="phone"
              name="text"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Dejanos tu comentario!</label>
            <textarea maxLength={250}></textarea>

            <button type="submit" disabled={isSubmitting}>
              Enviar comentario
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
