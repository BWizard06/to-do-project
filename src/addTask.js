document.addEventListener("DOMContentLoaded", () => {
    function createTask (task) {
        fetch("http://localhost:3000/auth/jwt/tasks", {
            method: `POST`, 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(task)})
    }

      
      const form = document.getElementById('addTaskForm');
      form.addEventListener('submit', ()=> {
        const taskName = document.getElementById("taskName");
        let task = {
            title: taskName.value,
        }
        createTask(task);
      }); 
    });