// Importing necessary dependencies
import PropTypes from "prop-types"; // PropTypes for type-checking props
import deleteTodo from "./DeleteToDo"; // Importing the deleteTodo function for removing tasks
import TaskCompleteBtn from "./TaskCompleteBtn"; // Importing the button component to mark tasks as complete
import styles from './ToDo.module.css'; // Importing CSS styles for TodoList component

// TodoList component definition
export default function TodoList({ ToDoS, setToDoS }) {
  // Logging ToDoS to the console for debugging purposes
  console.log("ToDoS in TodoList:", ToDoS);

  return (
    <>
      {/* Conditional rendering: If ToDoS array has tasks, render the Todo list */}
      {ToDoS.length > 0 && (
        <div className={styles["todo-container"]}> {/* Styling container */}
          <ul className={styles["todo-list"]}> {/* Styling the list */}
            {/* Mapping over the ToDoS array to render each task */}
            {ToDoS.map((item, index) => (
              <li
                className={styles["todo-item"]} // Styling for individual todo item
                key={index} // Unique key for list items
                style={{ textDecoration: item.completed ? "line-through" : "none" }} // Strike-through for completed tasks
              >
                {/* Displaying task text */}
                <span className={styles["todo-item-text"]}>{item.task}</span>

                <div className="buttons-div"> {/* Div for buttons */}
                  {/* Task Complete Button (Green Tick) */}
                  <TaskCompleteBtn
                    index={index} // Passing the index of the task
                    ToDoS={ToDoS} // Passing the entire list of tasks
                    setToDoS={setToDoS} // Passing the function to update tasks
                  />

                  {/* Delete Button (X) to remove task */}
                  <button
                    className={styles["deleteBtn"]} // Styling the delete button
                    onClick={() => deleteTodo(index, ToDoS, setToDoS)} // Calling deleteTodo function when clicked
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

// PropTypes definition for TodoList
TodoList.propTypes = {
  // Prop type validation
  setToDoS: PropTypes.func.isRequired, // setToDoS must be a function
  ToDoS: PropTypes.arrayOf( // ToDoS must be an array of objects
    PropTypes.shape({
      task: PropTypes.string.isRequired, // Each task must be a string
      completed: PropTypes.bool.isRequired, // Each task must have a "completed" property (boolean)
    })
  ).isRequired, // ToDoS is a required prop
};
