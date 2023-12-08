import React from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { ITask } from "../../types/ITask";
import TaskApi from "../../api/TaskApi";

class TaskStore {
  tasks: ITask[] = [];
  isLoading = false;
  error = "";
  
  constructor() {
    makeAutoObservable(this);
  }

  deleteTask = async (id: number) => {
    try {
      const token = localStorage.getItem("token")?.replaceAll('"', "");
      await TaskApi.fetchDeleteTask(id, token ?? "");
      runInAction(() => {
        this.error = "";
        this.tasks = this.tasks.filter((tasks) => tasks.id !== id);
      });
    } catch (e) {
      runInAction(() => {
        if (typeof e === "string")  this.error = e.toUpperCase();
        else if (e instanceof Error) this.error = e.message;
      });
    }
  };

  completeTask = async (task: ITask) => {
    try {
      const token = localStorage.getItem("token")?.replaceAll('"', "");
      await TaskApi.fetchCompleteTask(task, !task.completed, token ?? "");
      runInAction(() => {
        this.error = "";
        task.completed = !task.completed;
      });
    } catch (e) {
      runInAction(() => {
        if (typeof e === "string")  this.error = e.toUpperCase();
        else if (e instanceof Error) this.error = e.message;
      });
    }
  };

  editTask = async (task: ITask, name: string, desc: string) => {
    try {
      const token = localStorage.getItem("token")?.replaceAll('"', "");
      await TaskApi.fetchEditTask(task, name, desc, token ?? "");
      runInAction(() => {
        this.error = "";
        task.name = name;
        task.desc = desc;
      });
    } catch (e) {
      runInAction(() => {
        if (typeof e === "string")  this.error = e.toUpperCase();
        else if (e instanceof Error) this.error = e.message;
      });
    }
  };

  addTask = async (task: ITask) => {
    try {
      const token = localStorage.getItem("token")?.replaceAll('"', "");
      const newTask = await TaskApi.fetchAddTask(task, token ?? "");
      runInAction(() => {
        this.error = "";
        this.tasks.push(newTask);
      });
    } catch (e) {
      runInAction(() => {
        if (typeof e === "string")  this.error = e.toUpperCase();
        else if (e instanceof Error) this.error = e.message;
      });
    }
  };

  fetchTask = async () => {
    try {
        this.isLoading = false;
        const token = localStorage.getItem("token")?.replaceAll('"', "");
      const tasks = await TaskApi.fetchAllTask(token ?? "");
      runInAction(() => {
        this.error = "";
        this.tasks = tasks;
        this.isLoading = true;
      });
    } catch (e) {
      runInAction(() => {
        if (typeof e === "string")  this.error = e.toUpperCase();
        else if (e instanceof Error) this.error = e.message;
        this.isLoading = true;
      });
    }
  };

  logout = () => {
    this.tasks = [];
    this.error = "";
    this.isLoading = false;
  }
}



const taskStore = new TaskStore();

export default taskStore;
