import React, { FC, useEffect, useRef, useState } from "react";
import st from "./TaskList.module.scss";
import "./transition.scss";
import Task from "../Task/Task";
import { observer } from "mobx-react-lite";
import taskStore from "../../store/TaskStore/TaskStore";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Loader from "../../ui/loader/Loader";
interface Props {
  className?: string;
}

const TaskList: FC<Props> = observer(({ className = "" }) => {
  const refEmpty = useRef<HTMLDivElement>(null);
  const timeout = 400;

  useEffect(() => {
    if (taskStore.tasks.length != 0 && refEmpty.current) {
      refEmpty.current!.style.display = "none";
    }
    setTimeout(() => {
      if (taskStore.tasks.length == 0 && refEmpty.current)
        refEmpty.current.style.display = "block";
    }, timeout + 15);
  }, [taskStore.tasks.length, refEmpty, taskStore.isLoading]);

  useEffect(() => {
    taskStore.fetchTask();
  }, []);

  return (
    <div className={`${st.wrapper} ${className}`}>
      <Loader isLoading={taskStore.isLoading} />

      {!taskStore.error && (
        <TransitionGroup
          className={st.taskList}
          enter={taskStore.tasks.length !== 0}
        >
          {taskStore.tasks.map((task) => (
            <CSSTransition timeout={timeout} classNames="item" key={task.id}>
              <Task task={task} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}

      {taskStore.isLoading && !taskStore.error ? (
        <div className={st.taskList__empty__txt} ref={refEmpty}>
          Нет задач
        </div>
      ) : (
        <></>
      )}

      {taskStore.isLoading && taskStore.error ? (
        <div className={st.error_txt}>На сервере произошла ошибка</div>
      ) : (
        <></>
      )}
    </div>
  );
});

export default TaskList;
