import React from 'react'
import { donetask, removetask } from '../Redux/todoslice/TodoSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({todo}) => {
    const dispatch=useDispatch();
  return (
    <div className={`todo-item ${todo.isDone? "done": "undone"}`}>
      <div>
        {todo.title}
        <p>{todo.description}</p>
      </div>
      <span onClick={() => dispatch(donetask({id: todo.id}))}>{todo.isDone ? "done" : "Not done"}</span>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => dispatch(removetask({id: todo.id}))}>remove</button> 
    </div>
  )
}

export default TodoItem
