import React, { useState } from "react";
import st from "./MessageForm.module.scss";
import InputForm from "../../ui/input/InputForm/InputForm";
import Button from "../../ui/button/Button/Button";
import { socket } from "../../socket/socket";
const MessageForm = () => {
  const [msg, setMsg] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (msg !== "") {
      setMsg("");
      socket.emit("chat message", msg);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  return (
    <form className={st.form} onSubmit={onSubmit}>
      <InputForm className={st.form__input} value={msg} onChange={onChange} />
      <Button className={st.form__submit}>Отправить</Button>
    </form>
  );
};

export default MessageForm;
