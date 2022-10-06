const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell;
}

function getTask(tasks) {
    const task_list = document.getElementById("task-list");
    tasks.forEach((task) => {
        const tableRow = document.createElement("tr");
        tableRow.append(
            createCell(task.id), 
            createCell(task.title), 
            createCell(task.completed)
        );
        
        task_list.appendChild(tableRow);
    });
};

const tasks_url = 'http://localhost:3000/tasks';
function indexTasks(){
    fetch(tasks_url)
    .then((response) => response.json())
    .then((data) => getTask(data))
}

function createTask (task) {
    fetch(tasks_url, {method: `POST`, headers: {'Content-Type': 'application/json'}, body: JSON.stringify(task)})
    .then()
}

document.addEventListener("DOMContentLoaded", () => {
    indexTasks();
})








    
