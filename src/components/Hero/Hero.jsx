import { ImageGaleria } from "./ImageGaleria";
import { ProductOffer } from "./../Products/ProductOffer";
import { Products } from "./../Products/Products";
import { HelpFooter } from "./../Footer/HelpFooter";
import { ContactForm } from "../Form/ContactForm";
import { ChatbotContainer } from "../Chatbot/ChatbotContainer";

export const Hero = () => {
  return (
    <>
      <ImageGaleria />
      <ProductOffer />
      <Products />
      <ContactForm />
      <HelpFooter />
      <ChatbotContainer />
    </>
  );
};
