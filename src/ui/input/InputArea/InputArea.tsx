import React, { FC, useEffect, useRef } from "react";
import st from "./InputArea.module.scss";
interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}
const InputArea: FC<Props> = ({ className = "", onChange, ...props }) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const click = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
  };

  const change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    ref.current!.style.height = `auto`;
    ref.current!.style.height = `${ref.current!.scrollHeight}px`;

    onChange && onChange(e);
  };
  useEffect(() => {
    ref.current!.style.height = `auto`;
    ref.current!.style.height = `${ref.current!.scrollHeight}px`;
  }, []);
  return (
    <textarea
      className={`${st.input} ${className}`}
      {...props}
      onClick={click}
      onChange={change}
      ref={ref}
    />
  );
};

export default InputArea;
