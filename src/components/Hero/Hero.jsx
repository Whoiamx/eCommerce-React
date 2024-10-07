import { ImageGaleria } from "./ImageGaleria";
import { ProductOffer } from "./../Products/ProductOffer";
import { Products } from "./../Products/Products";
import { HelpFooter } from "./../Footer/HelpFooter";
import { ContactForm } from "../Form/ContactForm";

export const Hero = () => {
  return (
    <>
      <ImageGaleria />
      <ProductOffer />
      <Products />
      <ContactForm />
      <HelpFooter />
    </>
  );
};
