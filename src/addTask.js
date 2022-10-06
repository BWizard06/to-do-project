const tasks_url = 'http://localhost:3000/tasks';


document.addEventListener("DOMContentLoaded", () => {
    const taskName = document.getElementById("taskName");
    function createTask (task) {
        fetch(tasks_url, {method: `POST`, headers: {'Content-Type': 'application/json'}, body: JSON.stringify(task)})
        
    }
    


    function logSubmit(event) {
        log.textContent = `Task Submitted!`;
        event.preventDefault();
      }
      
      const form = document.getElementById('addTaskForm');
      const log = document.getElementById('log');
      form.addEventListener('submit', ()=> {
        
        
        
        
        let task = {
            title: taskName.value,
        }
        createTask(task);

      }); 
    })