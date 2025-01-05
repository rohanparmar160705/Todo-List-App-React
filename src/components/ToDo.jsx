import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import TaskCounter from "./TaskCounter";
import './ToDo.css';

export default function Todo() {
  const [ToDo, setToDo] = useState("Add Task"); // Input field for new task
  const [ToDoS, setToDoS] = useState([]); // Array of tasks

  return (
    <div>
      <Header />
      <TaskCounter ToDoS={ToDoS} /> {/* Adding TaskCounter */}
      <Form ToDo={ToDo} setToDo={setToDo} setToDoS={setToDoS} /> {/* Passing setToDoS */}
      <TodoList ToDoS={ToDoS} setToDoS={setToDoS} /> {/* Passing setToDoS to TodoList */}

      {/* Corrected style for the h4 element */}
      <h4 style={{ position: "fixed", bottom: "0%", left: "2%" }}>
        Made By - Rohan Parmar in 2025
      </h4>
    </div>
  );
}
