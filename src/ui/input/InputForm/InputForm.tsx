import React, { FC } from "react";
import st from "./InputForm.module.scss";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
const InputForm: FC<Props> = ({ className = "", ...props }) => {
  return <input {...props} className={`${className} ${st.input}`}></input>;
};

export default InputForm;
