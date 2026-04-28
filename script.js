function addNewTask() {
    // Get the input element and the text the user typed
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;
    
    // Only add task if user typed something
    if (taskText !== "") {
        // Get the task list
        let taskList = document.getElementById("taskList");
        
        // Create a new list item
        let newTask = document.createElement("li");
        newTask.className = "task-item";
        
        // Add the text the user typed
        newTask.innerText = taskText;
        
        // Add the new task to the list
        taskList.appendChild(newTask);
        
        // Clear the input so user can type a new task
        taskInput.value = "";
    }
}

// Make the "Add Task" button work
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addNewTask);

function addNewTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;
    
    if (taskText !== "") {
        let taskList = document.getElementById("taskList");
        
        // Create the main task item
        let newTask = document.createElement("li");
        newTask.className = "task-item";
        
        // Create a span for the task text
        let taskTextSpan = document.createElement("span");
        taskTextSpan.className = "task-text";
        taskTextSpan.innerText = taskText;
        
        // Create the delete button
        let deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.innerText = "Delete";
        
        // Add both the text and button to the task item
        newTask.appendChild(ta

