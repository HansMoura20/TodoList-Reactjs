import React from 'react'
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from './Todo';


const TodoList = ({todos, removeTodo, toggleTodo, editTodo}) => {
  return (
    <Paper>
      <List>
        {/* Map Throught the todos array */}
        {todos.map((todo, i) => (
          <>
            <Todo 
              id={todo.id}
              task={todo.task} 
              key={todo.id} 
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {i < todos.length - 1 && <Divider />}
          </>
          ))}
      </List>
    </Paper>
  )
}

export default TodoList
