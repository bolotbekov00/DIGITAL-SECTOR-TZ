const newTaskInput = document.getElementById("newTaskInput");
const taskList = document.getElementById("taskList");
const deleteCompletedBtn = document.getElementById("deleteCompleted");
const errorMsg = document.getElementById("errorMsg");

newTaskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskValue = newTaskInput.value.trim();

  if (taskValue === "") {
    errorMsg.textContent = "Задача не может быть пустой!";
    return;
  } else {
    errorMsg.textContent = "";
  }

  const taskItem = document.createElement("li");
  taskItem.className =
    "list-group-item d-flex justify-content-between align-items-center";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input me-2";
  checkbox.addEventListener("change", toggleTaskStatus);

  const taskText = document.createElement("span");
  taskText.textContent = taskValue;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm";
  deleteBtn.textContent = "Удалить";
  deleteBtn.addEventListener("click", () => taskItem.remove());

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskText);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
  newTaskInput.value = "";
}

function toggleTaskStatus(e) {
  const taskText = e.target.nextSibling;
  if (e.target.checked) {
    taskText.style.textDecoration = "line-through";
  } else {
    taskText.style.textDecoration = "none";
  }
}

deleteCompletedBtn.addEventListener("click", () => {
  const tasks = document.querySelectorAll("#taskList li input:checked");
  tasks.forEach((task) => task.parentElement.remove());
});
