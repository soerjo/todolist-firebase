import {
  ListItemSecondaryAction,
  Modal,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { React, useState } from "react";

function Listing({ todo, handlleDelete, handlleEdit }) {
  const [input, setInput] = useState("");
  const [index, setIndex] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = (id) => {
    setIndex(id);
    console.log(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 400,
        backgroundColor: "#fafafa",
        border: "2px solid #000",
        padding: "1rem",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h2 id="simple-modal-title">Text in a modal</h2>
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
          onClick={(e) => {
            handlleEdit(e, input, index);
            setOpen(false);
          }}
          variant="contained"
          color="primary"
          style={{ margin: "1rem" }}
        >
          Add Todo
        </Button>
      </form>
    </div>
  );

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>

      <ListItem button>
        <ListItemText primary={todo.todo} secondary={todo.id} />
        <ListItemSecondaryAction>
          <IconButton
            onClick={() => handleOpen(todo.id)}
            edge="end"
            aria-label="delete"
          >
            <EditIcon />
          </IconButton>{" "}
          <IconButton
            onClick={() => handlleDelete(todo.id)}
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
}

export default Listing;
