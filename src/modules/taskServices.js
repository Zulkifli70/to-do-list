import { Task } from "./taskMaker";

export class TaskService {
  constructor(repository) {
    this.repository = repository;
  }

  createTask(title, dueDate, priority, taskDone = false) {
    if (!title || !dueDate || !priority) {
      throw new Error("Title, DueDate, and priority are required");
    }
    const task = new Task(title, dueDate, priority, taskDone);
    this.repository.add(task);
    return task;
  }

  getAllTask() {
    const task = this.repository.lists;
    if (!task) {
      throw new Error("Task Not Found");
    }
    return task;
  }

  deleteTask(id) {
    const success = this.repository.remove(id);
    if (!success) {
      throw new Error("Task not found");
    }
    return success;
  }
}
