import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import botAvatarImage from "../assets/Favicon.ico";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

const steps = [
  {
    id: 1,
    message: "Hello! I am Geliet, your friendly chatbot.",
    trigger: 2,
  },
  {
    id: 2,
    message: "What is your name?",
    trigger: 3,
  },
  {
    id: 3,
    user: true,
    trigger: 4,
  },
  {
    id: 4,
    message: "Hi {previousValue}, nice to meet you! How can I help you?",
    trigger: 5,
  },
  {
    id: 5,
    options: [
      { value: 1, label: "About Ogechi", trigger: 6 },
      { value: 2, label: "Our services", trigger: 7 },
      { value: 3, label: "Connects", trigger: 8 },
      { value: 4, label: "Contact", trigger: 9 },
    ],
  },
  {
    id: 6,
    message:
      "Frontend Developer & Web Programmer. She builds fast scalable web Solutions",
    trigger: 5,
  },
  {
    id: 7,
    message:
      "Frontend Development, Web Development, Web Optimization, CMS, Responsive Web Design, Web Hosting, Web Maintenance, Web Scaling, Unit Testing.",
    trigger: 5,
  },
  {
    id: 8,
    message: "@geliettech via all online social networks.",
    trigger: 5,
  },
  {
    id: 9,
    message: "@ogechi.uhegbu@outlook.com",
    trigger: 5,
  },
];

const theme = {
  background: "white",
  headerBgColor: "#0891b2",
  headerFontSize: "20px",
  botBubbleColor: "#0891b2",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#1a202c",
  userFontColor: "white",
};

const config = {
  botAvatar: botAvatarImage,
};

const Bot = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => setShowChatbot(!showChatbot);

  return (
    <>
      {/* Floating Chat Toggle Button */}
      <div
        className="fixed bottom-5 right-4 sm:right-8 z-999 cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-cyan-500 transition-colors duration-300 animate-bounce"
        onClick={toggleChatbot}
      >
        <IoChatbubbleEllipses />
      </div>

      {/* Chatbot Popup */}
      <div
        className={`fixed z-1000 bottom-20 sm:bottom-5 right-4 sm:right-8 transform transition-transform duration-300 ${
          showChatbot ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-[90vw] sm:w-80 h-[70vh] sm:h-[500px] bg-white shadow-lg rounded-xl overflow-hidden relative">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 z-1010 p-2 text-2xl text-gray-700 hover:text-gray-900 transition-colors duration-200"
            onClick={toggleChatbot}
          >
            <IoIosCloseCircleOutline />
          </button>

          {/* ChatBot */}
          <ThemeProvider theme={theme}>
            <ChatBot
              steps={steps}
              headerTitle="Chat with Geliet"
              {...config}
              botAvatar={botAvatarImage}
            />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default Bot;
