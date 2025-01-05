import PropTypes from "prop-types";
import { useEffect } from "react";
import styles from "./TaskCounter.module.css";
import confetti from "canvas-confetti"; // Importing the confetti library

export default function TaskCounter({ ToDoS }) {
  const totalTasks = ToDoS.length;
  const completedTasks = ToDoS.filter(task => task.completed).length;

  // Check if all tasks are completed
  const allTasksCompleted = totalTasks > 0 && totalTasks === completedTasks;

  useEffect(() => {
    if (allTasksCompleted) {
      // Trigger the confetti effect
      const duration = 5 * 1000; // 5 seconds
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame(); // Start the animation
    }
  }, [allTasksCompleted]);

  return (
    <>
      {totalTasks > 0 && (
        <div className={styles.counterContainer}>
          <p className={styles.taskText}>
            Total Tasks: <span className={styles.taskCount}>{totalTasks}</span>
          </p>
          <p className={styles.taskText}>
            Completed Tasks: <span className={styles.taskCount}>{completedTasks}</span>
          </p>
        </div>
      )}
    </>
  );
}

// PropTypes for type-checking
TaskCounter.propTypes = {
  ToDoS: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
