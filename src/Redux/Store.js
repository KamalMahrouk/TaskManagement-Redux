import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from './todoslice/TodoSlice'


export const store = configureStore({
  reducer:{
    todo: TodoSlice,
  }
});