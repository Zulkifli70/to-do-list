import "./styles/style.css";
import { TaskList } from "./modules/listRepository.js";
import { LibraryController } from "./modules/listController.js";

const taskContent = document.querySelector(".task-container");

const taskBtn = document.querySelector("#task");
const todayBtn = document.querySelector("#today");
const weekBtn = document.querySelector("#this-week");
const addTaskBtn = document.querySelector(".add-task-btn");

const repository = new TaskList();
const controller = new LibraryController(repository);

controller.initialize({ taskContent });

addTaskBtn.addEventListener("click", () => {
  controller.dialogManager.show();
});

taskBtn.addEventListener("click", function () {
  taskContent.innerHTML = "";
  // taskContent.appendChild(taskPage());
});

todayBtn.addEventListener("click", function () {
  taskContent.innerHTML = "";
  // taskContent.appendChild(todayPage());
});

weekBtn.addEventListener("click", function () {
  taskContent.innerHTML = "";
  // taskContent.appendChild(weekPage());
});
