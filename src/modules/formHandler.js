export class TaskFormHandler {
  constructor(formElement, dialogManager) {
    this.form = formElement;
    this.dialogManager = dialogManager;
    this.onSubmitCallback = null;
    this.createFormFields();
  }

  createFormRow({ labelText, name, type, options }) {
    const formRow = document.createElement("div");
    formRow.classList.add("form-row");

    const label = document.createElement("label");
    label.textContent = labelText;

    if (type !== "radio") {
      label.setAttribute("for", name);

      const input = document.createElement("input");
      input.classList.add("input-text");
      input.setAttribute("type", type);
      input.setAttribute("name", name);
      input.setAttribute("id", name);
      input.required = true;

      formRow.appendChild(label);
      formRow.appendChild(input);
    } else {
      formRow.appendChild(label);

      const radioWrapper = document.createElement("div");
      radioWrapper.classList.add("radio-group");

      options.forEach((option, index) => {
        const radioId = `${name}_${index}`;

        const radioLabel = document.createElement("label");
        radioLabel.setAttribute("for", radioId);
        radioLabel.textContent = option.label;

        const radioInput = document.createElement("input");
        radioInput.setAttribute("type", "radio");
        radioInput.setAttribute("name", name);
        radioInput.setAttribute("id", radioId);
        radioInput.setAttribute("value", option.value);
        radioInput.required = true;

        const container = document.createElement("div");
        container.classList.add("radio-option");
        container.appendChild(radioInput);
        container.appendChild(radioLabel);

        radioWrapper.appendChild(container);
      });

      formRow.appendChild(radioWrapper);
    }

    return formRow;
  }

  createFormFields() {
    const fields = [
      { labelText: "Task Name", name: "task", type: "text" },
      { labelText: "Due Date", name: "dueDate", type: "date" },
      {
        labelText: "Priority",
        name: "priority",
        type: "radio",
        options: [
          { label: "Low", value: "Low" },
          { label: "Medium", value: "Medium" },
          { label: "High", value: "High" },
        ],
      },
    ];

    const submitBtn = this.form.querySelector(".submit-dialog-form-btn");

    fields.forEach((field) => {
      const row = this.createFormRow(field);
      this.form.insertBefore(row, submitBtn);
    });
  }

  initialize(onSubmitCallback) {
    this.onSubmitCallback = onSubmitCallback;
    this.form.addEventListener("submit", (event) => this.handleSubmit(event));
  }

  handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = this.extractFormData(event.target);
      const validatedData = this.validateFormData(formData);

      if (this.onSubmitCallback) {
        this.onSubmitCallback(validatedData);
      }

      this.resetForm();
      this.dialogManager.close();
    } catch (error) {
      this.showError(error.message);
    }
  }

  extractFormData(form) {
    const formData = new FormData(form);
    return {
      task: formData.get("task")?.trim(),
      dueDate: formData.get("dueDate"),
      priority: formData.get("priority"),
    };
  }

  validateFormData(data) {
    const errors = [];

    if (!data.task) {
      errors.push("Task name is required");
    }

    if (!data.dueDate) {
      errors.push("Due date is required");
    }

    if (!data.priority) {
      errors.push("Priority is required");
    }

    if (errors.length > 0) {
      throw new Error(errors.join(", "));
    }

    return data;
  }

  resetForm() {
    this.form.reset();
  }

  showError(message) {
    alert("Error: " + message);
  }
}
