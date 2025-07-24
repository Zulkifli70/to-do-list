export function todayPage() {
  const taskContent = document.createElement("div");
  taskContent.setAttribute("class", "task-content");

  const taskTitle = document.createElement("h1");
  taskTitle.textContent = "Today";

  taskContent.appendChild(taskTitle);

  return taskContent;
}
