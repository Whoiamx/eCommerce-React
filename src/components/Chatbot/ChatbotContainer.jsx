import ChatBot from "react-chatbotify";

export const ChatbotContainer = () => {
  const settings = {
    general: { embedded: false },
    chatHistory: { disabled: true, storageKey: "playground" },
    botBubble: { simStream: true },
    header: { title: "KickAI" },
    chatWindow: { messagePromptText: "Nuevos mensajes ↓" },
    tooltip: { text: "¿Qué producto estás buscando en Kick Store?" },
  };
  const flow = {
    start: {
      message: "Hola soy KickAI ¿que estas buscando comprarte el dia de hoy?",
      path: "end_loop",
    },
    end_loop: {
      message: (params) =>
        `Ok dame especificamente las caracteristicas de lo que buscas y voy a buscarte un producto que se adapte a ello`,
      path: "end_loop",
    },
  };

  // styles here
  const styles = {
    headerStyle: {
      background: "#2e7d32",
      color: "white",
      padding: "10px",
    },
    chatWindowStyle: {
      backgroundColor: "white",
      color: "black",
    },
    botBubbleStyle: {
      backgroundColor: "#ffe600",
      color: "black",
    },
    userBubbleStyle: {
      backgroundColor: "#2e7d32",
      color: "white",
    },
  };
  return (
    <>
      <ChatBot styles={styles} settings={settings} flow={flow} />
    </>
  );
};
