import React, { useEffect, useState } from "react";
import st from "./Messages.module.scss";
import Message from "../Message/Message";
import { observer } from "mobx-react-lite";
import { socket } from "../../socket/socket";
import SocketStore from "../../store/SocketStore/SocketStore";
import { IMessage } from "../../types/IMessage";
const MessageList = observer(() => {
  useEffect(() => {
    function onConnect() {}

    function onDisconnect() {}

    const onChatMessage = (msg: IMessage) => {
      SocketStore.addMessage(msg);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("chat message", onChatMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("chat message", onChatMessage);
    };
  }, []);

  return (
    <div className={st.msg__list}>
      {SocketStore.messages.map((msg, idx) => (
        <Message myMsg={msg.id === socket.id} message={msg} key={idx} />
      ))}
    </div>
  );
});

export default MessageList;
