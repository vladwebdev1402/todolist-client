import React, { FC } from "react";
import st from "./TaskButton.module.scss";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
const TaskButton: FC<Props> = ({ className, children, ...props }) => {
  return (
    <button className={`${className} ${st.btn}`} {...props}>
      {children}
    </button>
  );
};

export default TaskButton;
