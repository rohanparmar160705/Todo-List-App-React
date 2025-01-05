// Importing necessary dependencies
import { useState } from 'react'; // useState hook for managing button click state
import PropTypes from 'prop-types'; // PropTypes for type-checking props
import styles from './ToDo.module.css'; // Importing CSS styles for TaskCompleteBtn component

// TaskCompleteBtn component definition
export default function TaskCompleteBtn({ index, ToDoS, setToDoS }) {
  // Managing the button's clicked state with useState hook
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle task completion toggle
  const handleCompletion = () => {
    // Toggle the isClicked state when the button is clicked
    setIsClicked((prev) => !prev);

    // Creating a copy of the tasks array to avoid mutating the original array
    const updatedTasks = [...ToDoS];

    // Create a copy of the task to update its "completed" status
    const completedTask = { ...updatedTasks[index] }; // Copy task object
    completedTask.completed = !completedTask.completed; // Toggle the completed status

    // Replace the task at the given index with the updated task
    updatedTasks[index] = completedTask;

    // Update the tasks list with the new state
    setToDoS(updatedTasks); // Calling setToDoS to update the state
  };

  return (
    // Button to mark the task as completed/incomplete
    <button
      className={`${styles["tick-btn"]} ${isClicked ? styles["clicked"] : ""}`} // Dynamic class based on button state
      onClick={handleCompletion} // Call handleCompletion when clicked
    >
      ✓
    </button>
  );
}

// PropTypes definition for TaskCompleteBtn
TaskCompleteBtn.propTypes = {
  // Ensuring "index" is a number and required
  index: PropTypes.number.isRequired,

  // Ensuring "ToDoS" is an array of objects with task (string) and completed (boolean) properties
  ToDoS: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,

  // Ensuring "setToDoS" is a function that updates the tasks list
  setToDoS: PropTypes.func.isRequired,
};
