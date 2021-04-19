import {
  ListItemSecondaryAction,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";

function Listing({ todo, handlleDelete, hadnlleEdit }) {
  return (
    <ListItem button>
      <ListItemText primary={todo.todo} secondary={todo.id} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
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
  );
}

export default Listing;
