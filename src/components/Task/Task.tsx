import React, { FC, useState } from "react";
import st from "./Task.module.scss";
import { ITask } from "../../types/ITask";
import CompleteIcon from "../../ui/icons/CompleteIcon";
import DeleteIcon from "../../ui/icons/DeleteIcon";
import { observer } from "mobx-react-lite";
import taskStore from "../../store/TaskStore/TaskStore";
import InputEdit from "../../ui/input/InputEdit/InputEdit";
import TaskButton from "../../ui/button/taskButton/TaskButton";
import InputArea from "../../ui/input/InputArea/InputArea";
interface Props {
  task: ITask;
}
const Task: FC<Props> = observer(({ task }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [taskInfo, setTaskInfo] = useState({
    name: task.name,
    desc: task.desc ?? "",
  });

  const clearTaskInfo = () => {
    setTaskInfo({
      name: task.name,
      desc: task.desc ?? "",
    });
  };

  const completeTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    taskStore.completeTask(task);
  };
  const deleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    taskStore.deleteTask(task.id);
  };

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInfo({ ...taskInfo, name: e.target.value });
  };

  const changeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTaskInfo({ ...taskInfo, desc: e.target.value });
  };

  const clickOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!task.completed) {
      clearTaskInfo();
      setIsOpen(!isOpen);
    }
  };

  const saveEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    taskStore.editTask(task, taskInfo.name, taskInfo.desc);
  };

  const cancalEdit = () => {
    clearTaskInfo();
  };

  return (
    <div
      className={`${st.task} ${task.completed ? st.task_complete : ""}`}
      onClick={clickOpen}
    >
      <button
        className={`${st.task__btn} ${st.task__complete}`}
        onClick={completeTask}
      >
        <CompleteIcon className={st.task__complete__icon} />
      </button>
      <div className={`${st.task__body} ${isOpen ? st.task__body_open : ""}`}>
        {!isOpen && (
          <>
            <div className={st.task__title}>{task.name}</div>
            <div className={st.task__description}>{task.desc}</div>
          </>
        )}

        {isOpen && (
          <>
            <InputEdit
              className={st.task__edit__title}
              value={taskInfo.name}
              onChange={changeTitle}
            />
            <InputArea
              className={st.task__edit__description}
              onChange={changeDescription}
              value={taskInfo.desc}
            />
            <div className={st.task__edit__options}>
              <TaskButton className={st.task__cancel} onClick={cancalEdit}>
                Отменить
              </TaskButton>
              <TaskButton className={st.task__save} onClick={saveEdit}>
                Сохранить
              </TaskButton>
            </div>
          </>
        )}
      </div>
      <button
        className={`${st.task__btn} ${st.task__delete}`}
        onClick={deleteTask}
      >
        <DeleteIcon className={st.task__delete__icon} />
      </button>
    </div>
  );
});

export default Task;
