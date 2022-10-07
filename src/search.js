const createCell = (cellText) => {
  const cell = document.createElement("td");
  cell.innerText = cellText;
  return cell;
};

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("taskID");

function indexTask(id) {
  fetch(`http://localhost:3000/auth/jwt/task/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else{
        searchTitle.innerText = "Task not found";
        searchTitle.style.color = "red";
        const task_list = document.getElementById("task-list");
          setTimeout(() => {
            searchTitle.innerText = "Search Task";
            searchTitle.style.color = "black";
            task_list.innerHTML = "";
          }, 1000);

      }
    })
    .then((data) => getTask(data));
}

function getTask(task) {
  const task_list = document.getElementById("task-list");
  const tableRow = document.createElement("tr");
  tableRow.append(
    createCell(task.id),
    createCell(task.title),
    createCell(task.completed)
  );
  task_list.innerHTML = "";
  task_list.appendChild(tableRow);
}

searchButton.addEventListener("click", () => {
  indexTask(searchInput.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (!token) {
    const searchTitle = document.getElementById("searchTitle");
    searchTitle.innerText = "Login to search tasks";
    searchTitle.addEventListener(
      "click",
      () => (window.location.href = "./login.html")
    );
    searchTitle.style.color = "red";
    
  }
});
