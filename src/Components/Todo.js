import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const Todos = ({ task, completed }) => {
  return (
    <ListItem>
    <Checkbox tabIndex={-1} checked={completed}/>
      {/* Retrieve the task from the todos array and display it */}
      <ListItemText 
        // This style will line-through completed task
        style={{textDecoration: completed ? "line-through" : "none"}}>
        {task}
      </ListItemText>
      {/* This component will add the icon next to the list */}
      <ListItemSecondaryAction>
        {/* Delete Button */}
        <IconButton aria-label="Delete">
          <DeleteIcon/>
        </IconButton>
        {/* Edit Button */}
        <IconButton aria-label="Edit">
          <EditIcon/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Todos
