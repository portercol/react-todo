import React, { useState } from "react";

const AddTodo = (props) => {
  const [todoTitle, setTodoTitle] = useState("");

  return (
    <div>
      <input
        style={{ display: "flex", flexDirection: "row" }}
        type="text"
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button onClick={() => props.onAddTodo(todoTitle)}>Add New Todo</button>
    </div>
  );
};

export default AddTodo;
