import React from 'react'
import {useSelector} from 'react-redux'
import TodoItem from './TodoItem';
const TodoList = () => {
  const todos= useSelector((state)=> state.todo.todolist);
  console.log(todos)
  return (
    <div style={{ height:"650px", width:"100%", marginTop:"50px"}}>
      {todos.map((el)=><TodoItem todo={el}/>)}
    </div>
  )
}

export default TodoList
 