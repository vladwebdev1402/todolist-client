import React from "react";
import st from "./MainPage.module.scss";
import TaskList from "../../components/TaskList/TaskList";
import TaskForm from "../../components/TaskForm/TaskForm";
import Button from "../../ui/button/Button/Button";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <TaskForm className={st.form} />
      <TaskList className={st.wrapper} />
      <Button onClick={() => navigate("chat")} className={st.btn__chat}>
        Перейти в чат
      </Button>
    </>
  );
};

export default MainPage;
