import React from "react";
import { AiFillDelete } from "react-icons/ai";

function TasksList({ text, setTodos, Todos, id, todo }) {
  let handleDelete = () => {
    setTodos(Todos.filter((element) => element.id !== id));
  };
  let handleCompleted = () => {
    setTodos(
      Todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="container my-3">
      <div className="flex justify-center my-3 bg-success rounded-full ">
        <button
          onClick={handleDelete}
          className="indicator-item badge badge-primary"
        >
          <AiFillDelete />
        </button>
        <div className="grid w-60 text-center xd:w-40 md:w-30 lg:w-80 content-center">
          <h6 className={`${todo.completed ? "completed text-red-600" : ""}`}>
            {text}
          </h6>
        </div>
        <button
          onClick={handleCompleted}
          className="btn btn-success btn-circle mr-2 text-black"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default TasksList;
