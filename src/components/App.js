import React, { useState, useRef } from "react";
import Task from "./Task.jsx";
import "./../styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  let taskId ={current: new Date().getTime().toString() };

  const addTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks.push({ id: taskId.current, text: newTask });
    setNewTask("");
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const taskCopy = [...tasks];
    const filteredTasks = taskCopy.filter((task) =>
      task.id !== id ? task : null
    );
    setTasks(filteredTasks);
  };

  const saveChangedText = (id, newtext) => {
    const taskCopy = [...tasks];
    taskCopy.forEach((task) => {
      if (task.id === id) {
        task.text = newtext;
      }
    });
    setTasks(taskCopy);
  };

  return (
    <div id="main">
      <input
        id="task"
        type="textarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      ></input>
      <button id="btn" onClick={addTask} disabled={!newTask}>
        Add
      </button>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            saveChangedText={saveChangedText}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;