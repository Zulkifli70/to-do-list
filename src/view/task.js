export function taskPage() {
  const taskContent = document.createElement("div");
  taskContent.setAttribute("class", "task-content");

  const title = document.createElement("h1");
  title.textContent = "Halo";

  taskContent.appendChild(title);

  return taskContent;
}
