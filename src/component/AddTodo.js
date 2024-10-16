import React, { useState } from 'react'
import { addtask } from '../Redux/todoslice/TodoSlice'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
  const [newtask, setnewtask] = useState({
    id:Math.random(),
  title:"",
  description:"",
  isDone: false
  })
 
  const dispatch=useDispatch()
    return (
    <div className='add-taskarea'>
        <input text="" className=' mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='enter task title'
        onChange={(e)=>setnewtask({...newtask, title:e.target.value})}
     />
        
        <input text="" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='description'
        onChange={(e)=>setnewtask({...newtask, description:e.target.value})}
      />
        
        <button className='mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={()=>dispatch(addtask(newtask))} >add</button>
    </div>
  )
}

export default AddTodo
