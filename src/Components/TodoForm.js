import React from 'react';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "./Hooks/useInputState";

const TodoForm = ({ addTodo }) => {
  //import the hooks from "useInputState" to allow input
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper>
    {/* onSubmit the form will pass the input value to the todo in TodoApp component and the reset the input field */}
      <form 
        onSubmit={e=> {
        e.preventDefault();
        addTodo(value);
        reset();
      }}
      >
        <TextField value={value} onChange={handleChange} />
      </form>
      
    </Paper>
  )
}

export default TodoForm
