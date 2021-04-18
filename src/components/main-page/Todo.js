import { React, useState } from "react";
import "./todo.css";
import { Button, TextField } from "@material-ui/core";

function Todo() {
  const [todos, setTodos] = useState(["belajar code", "nonton anime"]);
  const [input, setInput] = useState("");
  console.log("isi input:", input);

  const inputData = (e) => {
    e.preventDefault();
    if (input) {
      setTodos([...todos, input]);
      setInput("");
    }
  };
  return (
    <div className="todolist">
      <div className="input-todolist">
        <h2>Hallo Soerjo Programers!</h2>
        <form className="form-input">
          <TextField
            id="todoinput"
            label="Todo"
            style={{ width: "60%" }}
            // variant="filled"
            placeholder="Todo List ..."
            // helperText="masukan todo list yang di inginkan"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            type="submit"
            onClick={inputData}
            variant="contained"
            color="primary"
            style={{ margin: "1rem" }}
          >
            Add Todo
          </Button>
        </form>
      </div>

      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
