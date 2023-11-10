import React, { FC } from "react";
import st from "./Button.module.scss";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: FC<Props> = ({ className = "", children, ...props }) => {
  return (
    <button className={`${className} ${st.btn}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
