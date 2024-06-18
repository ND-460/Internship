import React, { useRef, useState } from 'react';

function SecondComponent() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);
  const addNewTaskHandler = () => {
    const newTask = inputRef.current.value.trim();
    if (newTask !== "") {
      setTasks([...tasks, newTask]);
    }
    inputRef.current.value = "";
  };

  return (
    <>
      <div>Example of useRef</div>
      Enter your task
      <input ref={inputRef} />
      <button onClick={addNewTaskHandler}>Add new Task</button>
      {tasks.length === 0 ? (
        <p>No Tasks are available</p>
      ) : (
        <div>
          {tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </div>
      )}
    </>
  );
}

export default SecondComponent;