import React, { FC } from "react";
import st from "./icons.module.scss";
interface Props {
  className?: string;
}
const DeleteIcon: FC<Props> = ({ className }) => {
  return <div className={`${className} ${st.deteleIcon}`}></div>;
};

export default DeleteIcon;
