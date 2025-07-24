import { TaskService } from "./taskServices.js";
import { TaskRenderer } from "../utils/taskRenderer.js";
import { TaskDialogManager } from "./dialogManager.js";
import { TaskFormHandler } from "./formHandler.js";

export class LibraryController {
  constructor(repository) {
    this.taskService = new TaskService(repository);
    this.renderer = null;
    this.dialog = null;
  }

  initialize(elements) {
    const { taskContent, dialog, taskForm } = elements;

    this.renderer = new TaskRenderer(taskContent);
    this.dialogManager = new TaskDialogManager();
    this.formHandler = new TaskFormHandler(
      this.dialogManager.getForm(),
      this.dialogManager
    );

    this.formHandler.initialize((formData) => this.handleAddTask(formData));

    document.body.appendChild(this.dialogManager.getDialog());

    this.renderTasks();
  }

  handleAddTask(formData) {
    try {
      this.taskService.createTask(
        formData.task,
        formData.dueDate,
        formData.priority
      );

      this.renderTasks();
      this.dialogManager.close();
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  }

  handleDeleteTask(taskId) {
    try {
      const confirmed = confirm("Are you sure you want to delete this task?");
      if (confirmed) {
        this.taskService.deleteTask(taskId);
        this.renderTasks();
      }
    } catch (error) {
      console.error("Error deleting task:", error.message);
      alert("Error: " + error.message);
    }
  }

  renderTasks() {
    const tasks = this.taskService.getAllTask();
    this.renderer.renderTasks(tasks, (id) => this.handleDeleteTask(id));
  }

  addTask(title, dueDate, priority, taskDone = false) {
    return this.taskService.createTask(title, dueDate, priority, taskDone);
  }
}
