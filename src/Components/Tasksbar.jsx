import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TasksList from "./Tasks";

const getLocalTodos = () => {
  let list = localStorage.getItem('lists')
  if (list) {
    return JSON.parse(localStorage.getItem('lists'))
  }
  else {
    return []
  }
}
function Tasksbar() {
  const [Input, setInput] = useState(" ");
  const [Todos, setTodos] = useState(getLocalTodos());
  // use effect
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(Todos))
  }, [Todos])


  // setting input to value received
  const handleChange = (event) => {
    const data = event.target.value;
    setInput(data);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...Todos, { text: Input, completed: false, id: uuidv4() }]);
    setInput(" ");
  };


  return (
    <>
      {/* input component */}
      <div className="flex justify-center">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              value={Input}
              placeholder="Enter Tasks"
              onChange={handleChange}
              className="input input-bordered input-group-lg lg:input-group-lg md:input-group-sm"
            />
            <button
              onClick={handleSubmit}
              className="btn btn-square btn-success"
            >
              DO IT
            </button>
          </div>
        </div>
      </div>
      {/* Tasks listed component is below */}
      {Todos.map((todo) => (
        <div key={todo.id}>
          <TasksList
            text={todo.text}
            key={todo.id}
            id={todo.id}
            todo={todo}
            setTodos={setTodos}
            Todos={Todos}
          />
        </div>
      ))}
    </>
  );
}

export default Tasksbar;
