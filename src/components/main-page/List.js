import { ListItem, ListItemText } from "@material-ui/core";
import React from "react";

function Listing({ todo }) {
  return (
    <ListItem
      // role={undefined}
      //   dense
      button
      //   onClick={handleToggle(value)}
    >
      <ListItemText primary={todo.todo} secondary={todo.id} />
    </ListItem>
  );
}

export default Listing;
