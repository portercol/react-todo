// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTodo from "./components/AddTodo";

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

  const todoStyle = {
    padding: "10px 0px",
    fontFamily: "Arial",
    fontSize: "16",
    borderBottom: "1px solid black",
  };

  // AXIOS GET REQUEST
  useEffect(() => {
    axios.get(todosURL).then((res) => {
      const allTodos = res.data;
      setTodos(allTodos);
    });
  }, []);

  // AXIOS POST REQUEST
  const addTodos = (title) => {
    axios.post(todosURL, { title: title }).then((res) => {
      setTodos([res.data, ...todos]);
      setTitle("");
    });
  };

  // AXIOS DELETE REQUEST
  const deleteTodos = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <>
      <header style={headerStyle}>TODO APP</header>
      <AddTodo onAddTodo={(todoTitle) => addTodos(todoTitle)} />
      <div className="todo-wrapper">
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <div style={todoStyle}>
                {todo.title}
                <button
                  className="delete-btn"
                  onClick={() => deleteTodos(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
