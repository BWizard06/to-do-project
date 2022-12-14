document.addEventListener("DOMContentLoaded", () => {
  function createTask(task) {
    fetch("http://localhost:3000/auth/jwt/tasks", {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(task)
    }).then(function () {
      taskTitle.innerText = "Task added";
      taskTitle.style.color = "green";
      setTimeout(() => {
        taskTitle.innerText = "Tasks";
        taskTitle.style.color = "black";
      }, 1000);
    });
  }

  const form = document.getElementById("addTaskForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskName = document.getElementById("taskName");
    let task = {
      title: taskName.value,
    };
    createTask(task);
  });
  const token = localStorage.getItem("token");
  if (!token) {
    const taskTitle = document.getElementById("taskTitle");
    taskTitle.innerText = "Login to add tasks";
    taskTitle.addEventListener(
      "click",
      () => (window.location.href = "./login.html")
    );
    taskTitle.style.color = "red";
  }
});
