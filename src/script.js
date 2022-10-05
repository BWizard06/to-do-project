

let tasksData;
const getTasks = () => {
    fetch('http://localhost:3000/tasks')
        .then(response => response.json()) 
        .then((data) => {
            return data;
        });
};

document.addEventListener('DOMContentLoaded', () => {
    tasksData = getTasks();
    console.log(tasksData);
});