import { React, useState, useEffect } from "react";
import "./todo.css";
import { Button, List, TextField } from "@material-ui/core";
import Listing from "./List";
import db from "../../firebase";
import firebase from "firebase";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  console.log("isi todos:", todos);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(
        //   "isi dari fire base:",
        //   snapshot.docs.map((doc) => doc.data())
        // );
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            // timestamp: doc.data().timestamp.seconds,
          }))
        );
      });
  }, []);

  const inputData = (e) => {
    e.preventDefault();
    if (input) {
      db.collection("todos").add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput("");
  };
  return (
    <div className="todolist">
      <div className="input-todolist">
        <h2 style={{ marginTop: "0.5rem" }}>Hallo Soerjo Programers!</h2>

        <form className="form-input">
          <TextField
            id="todoinput"
            label="Todo"
            style={{ width: "50%" }}
            // variant="filled"
            placeholder="Todo List ..."
            // helperText="masukan todo list yang di inginkan"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            disabled={!input}
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

      <hr />
      <List
        style={{
          display: "Flex",
          flexDirection: "column",
          alignItems: "start",
          width: "80%",
        }}
      >
        {todos.map((todo) => (
          <Listing key={todo.id} todo={todo} />
        ))}
      </List>
    </div>
  );
}

export default Todo;
