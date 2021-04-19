import { React, useState, useEffect } from "react";
import "./todo.css";
import { Button, List, TextField } from "@material-ui/core";
import Listing from "./List";
import db from "../../firebase";
import firebase from "firebase";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // console.log("isi todos:", todos);
  console.log("isi inputs:", input);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
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
  const handlleEdit = (e, value, id) => {
    e.preventDefault();
    db.collection("todos").doc(id).set(
      {
        todo: value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  };

  const handlleDelete = (id) => {
    db.collection("todos").doc(id).delete();
  };
  return (
    <div className="todolist">
      <div className="input-todolist">
        <h2 style={{ marginTop: "0.5rem" }}>Aplikasi Todo List Firebase!</h2>

        <form className="form-input">
          <TextField
            id="todoinput"
            label="Todo"
            style={{ width: "50%" }}
            placeholder="Todo List ..."
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
      {/* list data dari fire base */}
      <List style={{ width: "80%" }}>
        {todos.map((todo) => (
          <Listing
            key={todo.id}
            todo={todo}
            handlleDelete={handlleDelete}
            handlleEdit={handlleEdit}
          />
        ))}
      </List>
    </div>
  );
}

export default Todo;
