// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const todosURL = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    axios.get(todosURL).then((res) => {
      console.log(res.data);
      setTodos(res.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">Hello World</header>
    </div>
  );
}

export default App;
