# to-do-project
# bootstrap-template
A starter template for [Bootstrap v5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/).
In this project, you'll be able to use this starter template, over and over again when using **Bootstrap v5.2**.

*Note: Please make sure you're using [Bootstrap v5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/) when looking over documentation*

### CDN vs Download
We're using Bootstrap CDN vs Download because
- Faster connection when reaching Bootstrap servers
- Save more memory by not adding ALL styles from Bootstrap

## Getting Started
1. Make sure to fork off of this repository to create a copy of this template.
2. `git clone SSH/HTTPREMOTELINK` into desired directory in your local computer.
3. Make sure to `cd` into recently cloned repository, and you'll see ALL the started files connected and ready to go.
4. Code away, and make sure to use [Bootstrap v5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/) version when looking over documentation. Happy coding!

### How To read `practice.js` 

This code is implementing a simple to-do list using HTML and JavaScript. Let's break it down:

- First, there are some commented-out lines that are not being used in the code. These are just examples of how you could create a header and footer for your to-do list using JavaScript.

- Next, the code uses the querySelector method to get references to the form, input field, task list, and clear button in the HTML document. These will be used later to add new tasks, display the list of tasks, and clear completed tasks.

- The `createTaskItem` function takes a text parameter and creates a new task item as an HTML li element with the given text. It also adds a "complete" button to the task item. When the button is clicked, it marks the task as completed by adding a "completed" class to the task item and hiding the complete button.

- The `addTaskItem` function takes a task item as a parameter and appends it to the task list using the appendChild method.

- The `handleFormSubmit` function is called when the form is submitted (i.e., when the user presses enter after typing a new task in the input field). It prevents the default form submission behavior and gets the trimmed value of the input field. If the value is not empty, it creates a new task item using the `createTaskItem` function, adds it to the task list using the `addTaskItem` function, and clears the input field.

- The `clearCompletedTasks` function is called when the clear button is clicked. It gets a list of all the completed tasks in the task list using the `querySelectorAll` method and iterates over them using the `forEach` method to remove them from the task list.

- Finally, there are two event listeners added using the `addEventListener` method. One listens for the form submission event and calls the `handleFormSubmit` function. The other listens for the click event on the clear button and calls the `clearCompletedTasks` function.

Overall, this code creates a simple to-do list that allows users to add new tasks, mark them as completed, and clear completed tasks. I hope this explanation helps you understand the code better!