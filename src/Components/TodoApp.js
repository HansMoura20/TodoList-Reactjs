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

  //Creates the hooks to display the todos 
  const [todos, setTodos] = useState(initialTodos);

  //This function will add new todo item to the existing array
  //This function will be used as props in the TodoForm component
  const addTodo = (newTodoText) => {
    setTodos([...todos, {id: 4, task: newTodoText, completed: false}])
  };

  const removeTodo = (todoId) => {
    //filter out removed todo
    const updatedTodos = todos.filter(todo => todo.id !== todoId);

    //call setTodos with new todos array
    setTodos(updatedTodos);
  }

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
      <Grid container justify="center" style={{marginTop: "1rem"}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo}/>
          
          {/* 1. Passing props to the "TodoList component" */}
          <TodoList todos={todos} removeTodo={removeTodo}/>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp


// - TodoApp
//   - TodoForm
//   - TodoList
//     - TodoItem