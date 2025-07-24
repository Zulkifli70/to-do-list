export function weekPage() {
  const taskContent = document.createElement("div");
  taskContent.setAttribute("class", "task-content");

  const taskTitle = document.createElement("h1");
  taskTitle.textContent = "Week";

  taskContent.appendChild(taskTitle);

  return taskContent;
}
