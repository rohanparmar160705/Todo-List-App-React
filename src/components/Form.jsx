// Importing necessary dependencies
import { useRef } from "react"; // useRef hook for managing DOM references
import PropTypes from "prop-types"; // PropTypes for type-checking props
import styles from './Form.module.css'; // Importing CSS styles for the form component

// Form component definition
export default function Form({ ToDo, setToDo, setToDoS }) {
  const inputRef = useRef(null); // Creating a reference to the input field

  // handleSubmit function to manage form submission
  function handleSubmit(event) {
    event.preventDefault(); // Preventing default form submission behavior
    if (ToDo.trim() === "" || ToDo === "Add Task") return; // Prevent empty or placeholder task

    // Updating the list of tasks (ToDoS) by adding the new task
    setToDoS((prevToDoS) => {
      const updatedToDoS = [...prevToDoS, { task: ToDo, completed: false }];
      return updatedToDoS; // Returning the updated tasks list
    });

    // Clearing the input field if focused, else resetting it to "Add Task"
    if (inputRef.current === document.activeElement) {
      setToDo(""); // Clear input if focused
    } else {
      setToDo("Add Task"); // Set default placeholder text when not focused
    }
  }

  // handleFocus function to clear the placeholder when the input is focused
  const handleFocus = () => {
    if (ToDo === "Add Task") {
      setToDo(""); // Clear the input if it contains the placeholder text "Add Task"
    }
  };

  // handleBlur function to reset the input field if it's empty
  const handleBlur = () => {
    if (ToDo.trim() === "") {
      setToDo("Add Task"); // Reset to "Add Task" if the input is empty
    }
  };

  // handleChange function to dynamically update the input value
  const handleChange = (e) => {
    setToDo(e.target.value); // Update the value of ToDo as the input changes
  };

  return (
    // Form element with onSubmit handler for form submission
    <form onSubmit={handleSubmit}
      className={styles["form-container"]} // Applying styles from CSS module
    >
      {/* Input field for task with various event handlers */}
      <input
        type="text"
        className="input" // CSS class for input styling
        value={ToDo} // Setting the input value to the current ToDo
        onFocus={handleFocus} // Handle focus event to clear placeholder
        onBlur={handleBlur} // Handle blur event to reset placeholder
        onChange={handleChange} // Handle change event to update the input value
        ref={inputRef} // Reference to the input element for direct manipulation
      />
      {/* Submit button to add the task */}
      <button className={styles.button} type="submit">Add</button>
    </form>
  );
}

// PropTypes for the Form component to validate the props passed to it
Form.propTypes = {
  ToDo: PropTypes.string.isRequired, // ToDo should be a string
  setToDo: PropTypes.func.isRequired, // setToDo should be a function
  ToDoS: PropTypes.arrayOf(PropTypes.string).isRequired, // ToDoS should be an array of strings
  setToDoS: PropTypes.func.isRequired, // setToDoS should be a function
};
