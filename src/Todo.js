import React from "react";
import { ListItem, ListItemText, Button, IconButton } from "@mui/material";
import { db } from "./firebase_config";
import DeleteIcon from "@mui/icons-material/Delete"

export default function TodoListItem({ todo, inprogress, id }) {
  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "In Progress" : "Completed"}
        />
      </ListItem>

      <Button varient="contained" color={inprogress ? "success" : "secondary"} onClick={toggleInProgress}>
        {inprogress ? "Done" : "UnDone"}
      </Button>
      <IconButton color="error" aria-label="delete" onClick={deleteTodo} size="large">
  <DeleteIcon />
    </IconButton>
      
    </div>
  );
}
