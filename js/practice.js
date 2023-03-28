//document.title="To-Do-List";

//const header = document.createElement("header");
//header.style.backgroundColor = "lightblue";
//When ever you see quotes it means that this is a string

//const footer = document.createElement (:"footer");
//footer.classList.add("text-center");

//const h1 = document.createElement

// Get DOM elements
const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');
const clearBtn = document.querySelector('#clear-btn');

// Function to create a new task item
function createTaskItem(text) {
  const taskItem = document.createElement('li');
  taskItem.innerText = text;
  
  // Add a "complete" button to the task item
  const completeBtn = document.createElement('button');
  completeBtn.innerText = 'Complete';
  completeBtn.classList.add('complete-btn');
  completeBtn.addEventListener('click', function() {
    taskItem.classList.add('completed');
    completeBtn.style.display = 'none';
  });
  taskItem.appendChild(completeBtn);
  
  return taskItem;
}

// Function to add a task item to the list
function addTaskItem(taskItem) {
  taskList.appendChild(taskItem);
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text) {
    const taskItem = createTaskItem(text);
    addTaskItem(taskItem);
    input.value = '';
  }
}

// Function to clear completed tasks
function clearCompletedTasks() {
  const completedTasks = taskList.querySelectorAll('.completed');
  completedTasks.forEach(function(task) {
    task.remove();
  });
}

// Event listener for form submission
form.addEventListener('submit', handleFormSubmit);

// Event listener for "clear" button
clearBtn.addEventListener('click', clearCompletedTasks);