const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell;
}

const addTask =(task) => {
    const task_list = document.getElementById("task-list");
    const tableRow = document.createElement("tr");

    tableRow.append(
        createCell(task.id), 
        createCell(task.completed), 
        createCell(task.title)
    );
    
    task_list.appendChild(tableRow);
}

const tasks_url = 'http://localhost:3000/tasks';
let tasksData;
fetch(tasks_url)
    .then((response) =>{
        return response.json();
    })
    .then((data) => {
        addTask(data[0]);
        //Lehrer fragen weil ich nur auf einen expliziten Eintrag zugreifen kann
    });







    
