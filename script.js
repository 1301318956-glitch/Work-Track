// Get the elements we need
let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

// Function to delete a task
function deleteTask() {
    // 'this' refers to the delete button that was clicked
    let taskItem = this.parentElement;
    taskList.removeChild(taskItem);
}

// Function to add a new task
function addNewTask() {
    // Get the text from the input
    let taskText = taskInput.value;
    
    // Check if input is not empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    
    // Create the main list item
    let newTask = document.createElement("li");
    newTask.className = "task-item";
    
    // Create the task text span
    let taskTextSpan = document.createElement("span");
    taskTextSpan.className = "task-text";
    taskTextSpan.innerText = taskText;
    
    // Create the delete button
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerText = "Delete";
    
    // Add click event to delete button
    deleteButton.addEventListener("click", deleteTask);
    
    // Add both elements to the list item
    newTask.appendChild(taskTextSpan);
    newTask.appendChild(deleteButton);
    
    // Add the complete task to the list
    taskList.appendChild(newTask);
    
    // Clear the input field
    taskInput.value = "";
}

// Connect the add button to the function
addButton.addEventListener("click", addNewTask);
