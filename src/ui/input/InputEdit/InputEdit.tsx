import React, { FC } from "react";
import st from "./InputEdit.module.scss";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const InputEdit: FC<Props> = ({ className, ...props }) => {
  return (
    <input
      className={`${className} ${st.input}`}
      {...props}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
      }}
    />
  );
};

export default InputEdit;
