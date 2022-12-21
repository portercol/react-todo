// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const todosURL = "https://jsonplaceholder.typicode.com/todos";

  const headerStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    fontSize: "32px",
    display: "flex",
    justifyContent: "center",
  };

  // AXIOS GET REQUEST
  useEffect(() => {
    axios.get(todosURL).then((res) => {
      console.table(res.data);
      const allTodos = res.data;
      setTodos(allTodos);
    });
  }, []);

  return (
    <>
      <header style={headerStyle}>TODO APP</header>
      <div className="todo-wrapper">
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <div>{todo.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
