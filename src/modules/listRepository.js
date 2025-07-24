export class TaskList {
  constructor() {
    this.lists = [];
  }

  addTask(task) {
    this.lists.push(task);
  }

  add(task) {
    this.lists.push(task);
  }

  findById(id) {
    return this.lists.find((task) => task.id === id);
  }

  remove(id) {
    const index = this.lists.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.lists.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  update(id, updatedTask) {
    const index = this.books.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.books[index] = updatedTask;
      return true;
    }
    return false;
  }

  count() {
    return this.lists.length;
  }

  // handleFormSubmit(e) {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);
  //   const title = formData.get("task");
  //   const dueDate = formData.get("dueDate");
  //   const priority = formData.get("priority");

  //   console.log("Data form yang diterima:", {
  //     title,
  //     dueDate,
  //     priority,
  //   });

  //   this.addTask(title, dueDate, priority, false);

  //   const taskForm = dialog.querySelector(".task-form");

  //   dialog.close();
  //   taskForm.reset();
  // }

  // handleNewTask() {
  //   const task = new Task(title, dueDate, priority, checklist);
  //   displayTask(task);
  // }
}
