const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell;
}

function getTasks(tasks) {
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
    .then((data) => getTasks(data))
}



document.addEventListener("DOMContentLoaded", () => {
    indexTasks();
})








    
