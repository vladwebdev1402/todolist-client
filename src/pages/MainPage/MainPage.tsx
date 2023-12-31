import React from "react";
import st from "./MainPage.module.scss";
import TaskList from "../../components/TaskList/TaskList";
import TaskForm from "../../components/TaskForm/TaskForm";
import Button from "../../ui/button/Button/Button";
import { useNavigate } from "react-router-dom";
import AuthStore from "../../store/AuthStore/AuthStore";
import taskStore from "../../store/TaskStore/TaskStore";
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <TaskForm className={st.form} />
      <TaskList className={st.wrapper} />
      <div className={st.options}>
        <Button onClick={() => navigate("chat")} className={st.btn__chat}>
          Перейти в чат
        </Button>
        <Button
          onClick={() => {
            AuthStore.logout();
            taskStore.logout();
          }}
          className={st.btn__chat}
        >
          Выйти из аккаунта
        </Button>
      </div>
    </>
  );
};

export default MainPage;
