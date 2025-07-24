import { formatTimeRemaining } from "./dateUtils.js";

export class TaskRenderer {
  constructor(containerElement) {
    this.container = containerElement;
  }

  renderTasks(lists, onDelete) {
    this.container.innerHTML = "";

    lists.forEach((task) => {
      const taskCard = this.createTaskCard(task, onDelete);
      this.container.appendChild(taskCard);
    });
  }

  createTaskCard(task, onDelete) {
    const displayInfo = task.getDisplayInfo();

    const taskCard = document.createElement("div");
    taskCard.setAttribute("class", "task-card");

    const title = document.createElement("h4");
    title.className = "task-title";
    title.textContent = displayInfo.title;

    const dueDate = document.createElement("p");
    dueDate.className = "task-due-date";
    const timeRemaining = formatTimeRemaining(displayInfo.dueDate);
    dueDate.textContent = `Due: ${timeRemaining}`;

    const priority = document.createElement("p");
    priority.className = "task-priority";
    priority.textContent = `${displayInfo.priority}`;

    const status = document.createElement("p");
    status.className = `task-status ${
      displayInfo.taskDone ? "status-done" : "status-pending"
    }`;
    status.textContent = `${displayInfo.taskDone ? "Done" : "Not Done"}`;

    const deleteTask = this.createButton("delete-btn", "Delete", () =>
      onDelete(task.id)
    );

    taskCard.appendChild(title);
    taskCard.appendChild(dueDate);
    taskCard.appendChild(priority);
    taskCard.appendChild(status);
    taskCard.appendChild(deleteTask);

    return taskCard;
  }

  createButton(className, text, onClick) {
    const button = document.createElement("button");
    button.setAttribute("class", className);
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
  }
}
