import React from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { ITask } from "../../types/ITask";
import TaskApi from "../../api/TaskApi";

class TaskStore {
  tasks: ITask[] = [];
  isLoading = false;
  error = false;

  constructor() {
    makeAutoObservable(this);
  }

  deleteTask = async (id: number) => {
    try {
      await TaskApi.fetchDeleteTask(id);
      runInAction(() => {
        this.tasks = this.tasks.filter((tasks) => tasks.id !== id);
      });
    } catch {
      runInAction(() => {
        this.error = true;
      });
    }
  };

  completeTask = async (task: ITask) => {
    try {
      await TaskApi.fetchCompleteTask(task, !task.completed);
      runInAction(() => {
        task.completed = !task.completed;
      });
    } catch {
      runInAction(() => {
        this.error = true;
      });
    }
  };

  editTask = async (task: ITask, name: string, desc: string) => {
    try {
      await TaskApi.fetchEditTask(task, name, desc);
      runInAction(() => {
        task.name = name;
        task.desc = desc;
      });
    } catch (err) {
      runInAction(() => (this.error = true));
    }
  };

  addTask = async (task: ITask) => {
    try {
      const newTask = await TaskApi.fetchAddTask(task);
      runInAction(() => {
        this.tasks.push(newTask);
      });
    } catch (err) {
      runInAction(() => {
        this.error = true;
      });
    }
  };

  fetchTask = async () => {
    try {
      const tasks = await TaskApi.fetchAllTask();
      runInAction(() => {
        this.tasks = tasks;
        this.isLoading = true;
      });
    } catch (err) {
      runInAction(() => {
        this.error = true;
        this.isLoading = true;
      });
    }
  };
}

const taskStore = new TaskStore();

export default taskStore;
