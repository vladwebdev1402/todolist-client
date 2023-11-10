import React, { FC, useState } from "react";
import InputForm from "../../ui/input/InputForm/InputForm";
import st from "./TaskForm.module.scss";
import taskStore from "../../store/TaskStore/TaskStore";
import Button from "../../ui/button/Button/Button";

interface Props {
  className?: string;
}

const TaskForm: FC<Props> = ({ className = "" }) => {
  const [data, setData] = useState({
    name: "",
    desc: "",
  });

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, name: e.target.value });
  };

  const changeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, desc: e.target.value });
  };

  const add = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (data.name) {
      taskStore.addTask({
        id: 0,
        name: data.name,
        desc: data.desc,
        completed: false,
      });
      setData({ name: "", desc: "" });
    }
  };

  return (
    <form className={`${className} ${st.form}`}>
      <InputForm
        placeholder="Название задачи..."
        value={data.name}
        onChange={changeName}
      />
      <InputForm
        placeholder="Описание задачи..."
        value={data.desc}
        onChange={changeDesc}
      />
      <Button onClick={add}>Добавить задачу</Button>
    </form>
  );
};

export default TaskForm;
