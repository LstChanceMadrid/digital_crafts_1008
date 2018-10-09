


let addTask = document.getElementById('add-task');
let pendingTasks = document.getElementById('pending-tasks');
let completedTasks = document.getElementById('completed-tasks');


// adds a new task
addTask.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("testing");

    let checkbox = document.createElement('input');
    checkbox.id = "checkbox";
    checkbox.className = "checkbox";
    checkbox.type = "checkbox";


    let taskInput = document.getElementById('form-text-input');
    if (taskInput.value === "") {
        return alert("You must enter a task");
    } 

  
    let taskName = document.createElement('p');
    taskName.className = "task-name";
    taskName.innerHTML = taskInput.value;

    let removeTaskButton = document.createElement('input');
    removeTaskButton.className = "remove-task-button";
    removeTaskButton.type = "submit";
    removeTaskButton.value = "Remove Task";


    let newTask = document.createElement('div');
    newTask.className = "task";
    newTask.appendChild(checkbox);
    newTask.appendChild(taskName);
    newTask.appendChild(removeTaskButton);

    pendingTasks.appendChild(newTask);

    taskInput.value = "";
    



removeTaskButton.addEventListener("click", function() {

     this.parentElement.parentElement.removeChild(this.parentElement);
})



    checkbox.addEventListener('change', function(event) {
        if ( this.parentElement.parentElement === pendingTasks ) {

        completedTasks.appendChild(checkbox.parentElement);
        }
        else {

        //checkbox.addEventListener('change', function() {


            pendingTasks.appendChild(checkbox.parentElement);}
            
        //})
    
    })

})

// removes a task
//removeTaskButton.addEventListener("click", function() {

  //  newTask.removeChild(this.parentElement);
//})



// changes a task from pending and complete
