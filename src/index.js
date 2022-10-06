const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell;
}

function indexTasks(){
    fetch('http://localhost:3000/auth/jwt/tasks', {
        headers: {'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`}
    })
    .then((response) => response.json())
    .then((data) => getTasks(data))
}

function changeTask(task){
    fetch(`http://localhost:3000/auth/jwt/tasks`, {
        method: `PUT`,
        headers: {'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`}, 
        body: JSON.stringify(task)
    }).then(window.location.reload())

}

function deleteTask(id){
    fetch(`http://localhost:3000/auth/jwt/task/${id}`, {
        method: `DELETE`,
        headers: {'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`},})
        //.then(alert("Task deleted"))
        .then(window.location.reload())
}

function getTasks(tasks) {
    const task_list = document.getElementById("task-list");
    tasks.forEach((task) => {
        const tableRow = document.createElement("tr");
        const deleteButton = document.createElement("button");
        const checkBox = document.createElement("input");
        const chckcell = document.createElement("td");
        const changeButton = document.createElement("button");
        const changeCell = document.createElement("td");

        tableRow.append(
            createCell(task.id), 
            createCell(task.title), 
        );
        deleteButton.innerText = "Delete";
        changeButton.innerText = "Change Title";
        chckcell.appendChild(checkBox);
        tableRow.appendChild(chckcell);
        changeCell.appendChild(changeButton);
        tableRow.appendChild(changeCell);
        tableRow.appendChild(deleteButton);
        changeButton.classList.add("btn", "btn-primary"); 
        changeButton.setAttribute("id","change-button");
        deleteButton.classList.add("btn", "btn-danger", "btn-sm", "delete-button",);
        deleteButton.setAttribute("id","delete-button");
        deleteButton.addEventListener("click", () => deleteTask(task.id));
        checkBox.addEventListener("change", () => changeTask({...task, completed: !task.completed}));
        changeButton.addEventListener("click", () => {
            let newTitle = prompt("Enter new title");
            changeTask({...task, title: newTitle})
        });
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("id", "checkbox");
        checkBox.checked = task.completed;

        task_list.appendChild(tableRow);
    });
};
document.addEventListener("DOMContentLoaded", () => {
    indexTasks();
    const token = localStorage.getItem('token');
    if (!token) {
        const taskTitle = document.getElementById("taskTitle");
        taskTitle.innerText = "You are not logged in, click here to login";
        taskTitle.addEventListener("click", () => window.location.href = "./login.html");
        taskTitle.style.color = "red";
}
});