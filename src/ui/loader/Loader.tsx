import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import "./transition.scss";
interface Props {
  isLoading: boolean;
}

const Loader: FC<Props> = ({ isLoading }) => {
  return (
    <CSSTransition
      in={!isLoading}
      timeout={500}
      classNames="loader"
      unmountOnExit
    >
      <div className="loader"></div>
    </CSSTransition>
  );
};

export default Loader;
