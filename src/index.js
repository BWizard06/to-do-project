const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell;
}

function changeTask(task){
    task.completed = !task.completed;
    fetch(`http://localhost:3000/tasks`, {
        method: `PUT`,headers: {'Content-Type': 'application/json'}, body: JSON.stringify(task)
    })

}

function deleteTask(id){
    fetch(`http://localhost:3000/task/${id}`, {method: `DELETE`})
    .then(window.location.reload())
}

function getTasks(tasks) {
    const task_list = document.getElementById("task-list");
    tasks.forEach((task) => {
        const tableRow = document.createElement("tr");
        const deleteButton = document.createElement("button");
        const checkBox = document.createElement("input");
        const chckcell = document.createElement("td");

        tableRow.append(
            createCell(task.id), 
            createCell(task.title), 
        );
        deleteButton.innerText = "Delete";
        chckcell.appendChild(checkBox);
        tableRow.appendChild(chckcell);
        tableRow.appendChild(deleteButton);
        deleteButton.classList.add("btn", "btn-danger", "btn-sm", "delete-button",);
        deleteButton.setAttribute("id","delete-button");
        deleteButton.addEventListener("click", () => deleteTask(task.id));
        checkBox.addEventListener("change", () => changeTask(task));
        checkBox.setAttribute("type", "checkbox");
        checkBox.checked = task.completed;

        
        
        task_list.appendChild(tableRow);
    });
};

const tasks_url = 'http://localhost:3000/tasks';
function indexTasks(){
    fetch(tasks_url)
    .then((response) => response.json())
    .then((data) => getTasks(data))
}



document.addEventListener("DOMContentLoaded", () => {
    indexTasks();
});