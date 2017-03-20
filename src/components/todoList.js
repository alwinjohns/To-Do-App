import React from 'react'
const TodoList = ({ todos, onTodoClick }) => {
  return (
    <div>
      <ul>
        {todos.map(todo =>
          <li onClick={onTodoClick(todo.id)} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}> {todo.text} </li>
        )}
      </ul>
    </div>
  )
}
export default TodoList
