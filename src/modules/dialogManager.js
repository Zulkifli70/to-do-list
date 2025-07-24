export class TaskDialogManager {
  constructor() {
    this.dialog = this.createDialog();
    this.closeButton = this.dialog.querySelector(".close-dialog-form-btn");
    this.initialize();
  }

  createDialog() {
    const dialog = document.createElement("dialog");
    dialog.setAttribute("class", "dialog-form");

    const headerForm = document.createElement("div");
    headerForm.setAttribute("class", "header-form");

    const text1 = document.createElement("h4");
    text1.textContent = "Task";

    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("class", "close-dialog-form-btn");
    closeBtn.textContent = "Close";

    const taskForm = document.createElement("form");
    taskForm.setAttribute("class", "task-form");
    taskForm.setAttribute("method", "dialog");

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("class", "submit-dialog-form-btn");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Submit";

    // Assemble dialog structure
    dialog.appendChild(headerForm);
    headerForm.appendChild(text1);
    headerForm.appendChild(closeBtn);
    dialog.appendChild(taskForm);
    taskForm.appendChild(submitBtn);

    return dialog;
  }

  initialize() {
    // Close button functionality
    this.closeButton.addEventListener("click", () => {
      this.close();
    });

    // Close dialog when clicking outside
    window.addEventListener("click", (event) => {
      if (event.target === this.dialog) {
        this.close();
      }
    });

    // Close dialog when pressing Escape
    this.dialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.close();
      }
    });
  }

  show() {
    this.dialog.showModal();
  }

  close() {
    this.dialog.close();
  }

  getDialog() {
    return this.dialog;
  }

  getForm() {
    return this.dialog.querySelector(".task-form");
  }

  isOpen() {
    return this.dialog.open;
  }
}
