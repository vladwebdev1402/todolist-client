import React from "react";
import Button from "../../ui/button/Button/Button";
import { useNavigate } from "react-router-dom";
import st from "./ErrorPage.module.scss";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className={st.error}>
      404 страницы не существует
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Вернуться на главную
      </Button>
    </div>
  );
};

export default ErrorPage;
