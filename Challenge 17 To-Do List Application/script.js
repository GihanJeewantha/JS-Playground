/*Problem:
Create a simple To-Do List web application that allows users to:

Add tasks to a list.
Mark tasks as complete.
Delete tasks.
This project will use HTML for structure, CSS for styling, and JavaScript for functionality. */

// Select elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

// Add a task
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create list item
    const listItem = document.createElement("li");

    // Create task text element
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    deleteButton.style.border = "none";
    deleteButton.style.borderRadius = "4px";
    deleteButton.style.cursor = "pointer";
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });
    listItem.appendChild(deleteButton);

    // Add mark as complete functionality
    taskSpan.addEventListener("click", () => {
        taskSpan.classList.toggle("completed");
    });

    // Add the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
});
