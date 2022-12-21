import React, { useState } from "react";

const AddTodo = (props) => {
  const [todoTitle, setTodoTitle] = useState("");

  const inputStyle = {
    display: "flex",
    flexDirection: "row",
    margin: "20px auto 10px auto ",
    padding: "5px",
  };

  const buttonStyle = {
    display: "flex",
    flexDirection: "row",
    margin: "10px auto 20px auto ",
  };

  return (
    <div>
      <input
        style={inputStyle}
        type="text"
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button style={buttonStyle} onClick={() => props.onAddTodo(todoTitle)}>
        Add New Todo
      </button>
    </div>
  );
};

export default AddTodo;
