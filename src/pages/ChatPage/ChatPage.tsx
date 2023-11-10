import React from "react";
import Button from "../../ui/button/Button/Button";
import { useNavigate } from "react-router-dom";
import st from "./ChatPage.module.scss";
import MessageList from "../../components/MessageList/MessageList";
import MessageForm from "../../components/MessageForm/MessageForm";
const ChatPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={st.chat}>
        <MessageList />
        <MessageForm />
      </div>
      <Button onClick={() => navigate("/")} className={st.btn__return}>
        Вернуться на главную
      </Button>
    </>
  );
};

export default ChatPage;
