# Input

This react to do list application takes two forms of user input including task title and task description. A user is required to enter the title and description of the task in the respective input fields. Title may briefly describe the task and the description provides additional details. 

# Process

Technically, the application uses React and the useState hooks to manage the satates. When a user the Add Task button, the task title and description are captured and stored in the application's state. The information is then dynamically rendered using the `.map()` function to loop through the state array and create `TodoItem` components for each task provided by the user. The app also toggles when a user clicks on the task title to show or hide the description.

# Output

As mentioned above, the output is basically a functional ToDo list application with an interactive interface. By clicking on the task title, a user can be able to expand or collapse the task description. This allows one to organize the tasks well. As a user, one can also delete tasks by clicking on the delete button associated with each task. It provides an efficient way for users to keep track of their tasks and their descriptions in a user-friendly manner.
