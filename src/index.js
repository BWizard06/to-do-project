const createCell = (cellText) => {
  const cell = document.createElement("td");
  cell.innerText = cellText;
  return cell;
};

function indexTasks() {
  fetch("http://localhost:3000/auth/jwt/tasks", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then((data) => getTasks(data));
}

function changeTask(task) {
  fetch(`http://localhost:3000/auth/jwt/tasks`, {
    method: `PUT`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(task),
  }).then(indexTasks);
}

function deleteTask(id) {
  fetch(`http://localhost:3000/auth/jwt/task/${id}`, {
    method: `DELETE`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then(function () {
    indexTasks();
    taskTitle.innerText = "Task deleted";
    taskTitle.style.color = "red";
    setTimeout(() => {
      taskTitle.innerText = "Tasks";
      taskTitle.style.color = "black";
    }, 1000);
  });
}

function getTasks(tasks) {
  const task_list = document.getElementById("task-list");
  task_list.replaceChildren();
  tasks.forEach((task) => {
    const tableRow = document.createElement("tr");
    const deleteButton = document.createElement("button");
    const deleteCell = document.createElement("td");
    const checkBox = document.createElement("input");
    const chckcell = document.createElement("td");
    const changeButton = document.createElement("button");
    const changeCell = document.createElement("td");
    const changeName = document.createElement("input");
    const changeNameCell = document.createElement("td");
    changeName.type = "text";
    tableRow.append(
      createCell(task.id),
      changeNameCell,
      chckcell,
      changeCell,
      deleteCell
    );
    changeName.type = "text";
    changeName.value = task.title;
    changeName.setAttribute("readonly", "readonly");
    changeName.style.size = "number";
    changeName.style.border = "none";
    changeName.style.background = "transparent";
    changeNameCell.append(changeName);
    changeButton.addEventListener("click", () => {
      changeCell.hidden = true;
      const saveButton = document.createElement("button");
      const saveCell = document.createElement("td");
      saveCell.appendChild(saveButton);
      //tableRow.removeChild(changeButton);
      tableRow.append(saveCell, deleteCell);
      saveButton.innerText = "Save";
      saveCell.append(saveButton);
      saveButton.classList.add("btn", "btn-success");
      saveButton.setAttribute("id", "save-button");
      changeName.focus();
      changeName.classList.add("form-control");
      changeName.id = "changeName";
      changeName.removeAttribute("readonly");
      saveButton.addEventListener("click", () => {
        let newTitle = changeName.value;
        changeTask({ ...task, title: newTitle });
      });
    });
    deleteButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/></svg>';
    changeButton.innerText = "Change Title";
    chckcell.appendChild(checkBox);
    changeCell.appendChild(changeButton);
    deleteCell.appendChild(deleteButton);
    changeButton.classList.add("btn", "btn-primary");
    changeButton.setAttribute("id", "change-button");
    deleteButton.classList.add("btn", "btn-danger", "btn-sm", "delete-button");
    deleteButton.setAttribute("id", "delete-button");
    deleteButton.addEventListener("click", () => deleteTask(task.id));
    checkBox.addEventListener("change", () =>
      changeTask({ ...task, completed: !task.completed })
    );
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "checkbox");
    checkBox.checked = task.completed;

    task_list.appendChild(tableRow);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  indexTasks();
  const token = localStorage.getItem("token");
  if (!token) {
    const taskTitle = document.getElementById("taskTitle");
    taskTitle.innerText = "Login to see your tasks";
    taskTitle.addEventListener(
      "click",
      () => (window.location.href = "./login.html")
    );
    taskTitle.style.color = "red";
  }
});
