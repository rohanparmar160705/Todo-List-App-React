// deleteTodo function definition for deleting a task from the list
export default function deleteTodo(index, ToDoS, setToDoS) {
  // Logging the index of the task that is about to be deleted for debugging
  console.log("Deleting task at index:", index);

  // Checking if setToDoS is a function before trying to call it
  if (typeof setToDoS === "function") {
    // Calling the setToDoS function to update the state of tasks
    setToDoS((prevToDoS) => {
      // Creating a new array (updatedToDoS) by filtering out the task at the given index
      const updatedToDoS = prevToDoS.filter((_, i) => i !== index); // Filter removes the task at the specified index

      // Logging the updated ToDoS array after deletion for debugging
      console.log("Updated ToDoS:", updatedToDoS);

      // Returning the updated list of tasks to be set in the state
      return updatedToDoS;
    });
  } else {
    // Logging an error if setToDoS is not a function (which shouldn't happen)
    console.error("setToDoS is not a function");
  }
}
