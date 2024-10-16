import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  todolist:[
    {id: Math.random(),
     title: 'todo item 1',
     description:'This is a description of todo item 1.',
     isDone:false},
     {
      id: Math.random(),
      title: 'todo item 2',
      description:'This is a description of todo item 2.',
      isDone:false},
      {
        id: Math.random(),
        title: 'todo item 3',
        description:'This is a description of todo item 3.',
        isDone:true
      }

  ]
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

    addtask: (state, action) => {
       state.todolist.push(action.payload);
    },
    removetask: (state, action) => {
      state.todolist = state.todolist.filter(item => item.id !== action.payload.id);



  },
  donetask:(state, action) => {
    let task=
    state.todolist.findIndex((el) => el.id === action.payload.id);
    state.todolist[task]={...state.todolist[task],
      isDone: !state.todolist[task].isDone};
    },
    edittask:(state, action) => {
      let task=
      state.todolist.findIndex((el) => el.id === action.payload.id);
      state.todolist[task]=action.payload.edited
        }


}})

// Action creators are generated for each case reducer function
export const { addtask, removetask ,donetask ,edittask} = todoSlice.actions

export default todoSlice.reducer