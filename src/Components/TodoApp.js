import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";



const TodoApp = () => {
  //This is some default values arrays for the useState
  const initialTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
    { id: 3, task: "Grow Beard", completed: false} 
  ];

  //Creates the hooks
  const [todos, setTodos] = useState(initialTodos);

  return (
    // This "Paper" create the whole page
    <Paper style={{
      padding: 0,
      margin: 0,
      height: "100vh",
      backgroundColor: "#fafafa"
    }}
    elevation={0}
    >
    {/* This is the top bar on the page */}
      <AppBar color='primary' position='static' style={{height: "64px"}}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoForm/>
      
      {/* 1. Passing props to the "TodoList component" */}
      <TodoList todos={todos}/>
    </Paper>
  )
}

export default TodoApp


// - TodoApp
//   - TodoForm
//   - TodoList
//     - TodoItem