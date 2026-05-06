// Step 1: Get all the elements we need
let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

// Step 2: Add event listener to the button
addButton.addEventListener("click", addNewTask);

// Step 3: Function to add a new task
function addNewTask() {
    // Get the text from the input
    let taskText = taskInput.value;
    
    // Get the selected category
    let categorySelect = document.getElementById("categorySelect");
    let selectedCategory = categorySelect.value;
    
    // Check if input is not empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    
    // Create the main list item
    let newTask = document.createElement("li");
    newTask.className = "task-item";
    
    // Create the category label
    let categoryLabel = document.createElement("span");
    categoryLabel.innerText = selectedCategory;
    categoryLabel.style.marginRight = "10px";
    categoryLabel.style.fontWeight = "bold";
    categoryLabel.style.padding = "3px 8px";
    categoryLabel.style.borderRadius = "3px";
    categoryLabel.style.color = "white";
    
    // Set different colors based on category
    if (selectedCategory === "personal") {
        categoryLabel.style.backgroundColor = "#007bff";
    } else if (selectedCategory === "homework") {
        categoryLabel.style.backgroundColor = "#28a745";
    } else if (selectedCategory === "chores") {
        categoryLabel.style.backgroundColor = "#ffc107";
        categoryLabel.style.color = "black";
    }
    
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
    
    // Add all elements to the list item IN ORDER
    newTask.appendChild(categoryLabel);
    newTask.appendChild(taskTextSpan);
    newTask.appendChild(deleteButton);
    
    // Add the complete task to the list
    taskList.appendChild(newTask);
    
    // Clear the input field
    taskInput.value = "";
}

// Step 4: Function to delete a task
function deleteTask() {
    let taskItem = this.parentElement;
    taskList.removeChild(taskItem);
}

