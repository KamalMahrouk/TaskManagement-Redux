import './App.css';
import AddTodo from './component/AddTodo';
import Header from './component/Header';
import TodoList from './component/TodoList';
function App() {
  return (
    <div>
       <Header /> 
       <div  style={{position:"absolute", width:"100%",}}>
       <AddTodo/>
       <TodoList />
       </div>
    </div>
  );
}

export default App;
 