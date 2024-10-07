import errorImg from "../assets/undraw_page_not_found_re_e9o6.svg";

export const Error404 = () => {
  return (
    <div className="error-404">
      <img className="img-404" src={errorImg} />
      <h2>
        Ups...no encontramos lo que estabas buscando! En caso de necesitar algo
        comunicate con At. Al Cliente.
      </h2>
      <span>0800-777-444</span>
    </div>
  );
};
