import React, { FC } from "react";
import { IMessage } from "../../types/IMessage";
import st from "./Message.module.scss";
interface Props {
  message: IMessage;
  myMsg: boolean;
}
const Message: FC<Props> = ({ message, myMsg }) => {
  return (
    <div className={`${st.message} ${myMsg ? st.message_my : ""}`}>
      {message.msg}
    </div>
  );
};

export default Message;
