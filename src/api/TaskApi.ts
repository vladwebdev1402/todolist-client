import { ITask } from "../types/ITask";

class TaskApi {

    static fetchAllTask = async () => {
        const response = await fetch("http://localhost:3050/api/todo")
        const data = await response.json()
        return data
    }
    
    static fetchAddTask = async (task: ITask) => {
      const response = await fetch("http://localhost:3050/api/todo", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        }
      })
      const data = await response.json();
      return data;
    }

    static fetchEditTask = async (task: ITask, name: string, desc: string) => {
      const response = await fetch("http://localhost:3050/api/todo", {
            method: "PUT",
            body: JSON.stringify({
              ...task,
              name: name,
              desc: desc
            }),
            headers: {
              "Content-Type": "application/json",
            }
          })
      return await response.json();
    }


    static fetchCompleteTask = async (task: ITask, completed: boolean) => {
      const response = await  fetch("http://localhost:3050/api/todo", {
            method: "PUT",
            body: JSON.stringify({
              ...task,
              completed: completed,
            }),
            headers: {
              "Content-Type": "application/json",
            }
          })
      return await response.json();
      
    }

    static fetchDeleteTask = async (id: number) => {
      const response = await fetch("http://localhost:3050/api/todo", {
        method: "DELETE",
        body: JSON.stringify({
          id: id,
        }),
        headers: {
          "Content-Type": "application/json",
        }
      })
      return await response.json();
    }
   
}

export default TaskApi;