import { isValid, parseISO } from "date-fns";

class Task {
  constructor(title, dueDate, priority, taskDone = false) {
    this.title = title;
    this.id = crypto.randomUUID();
    const parsedDate =
      typeof dueDate === "string" ? parseISO(dueDate) : new Date(dueDate);
    if (!isValid(parsedDate)) {
      throw new Error("Invalid due date format");
    }
    this.dueDate = parsedDate;
    this.priority = priority;
    this.taskDone = taskDone;
  }
  toggleDone() {
    this.taskDone = !this.taskDone;
  }

  getDisplayInfo() {
    return {
      title: this.title,
      id: this.id,
      dueDate: this.dueDate,
      priority: this.priority,
      taskDone: this.taskDone,
    };
  }
}

export { Task };
