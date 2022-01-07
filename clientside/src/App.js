import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import TaskEdit from './components/TaskEdit';
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { desc: "task1", id: 1, date: "6/1/21", complete:false},
    { desc: "task2", id: 2, date:"6/1/21", complete:false },
  ]);
 
  const onSaveTask = ({ desc, date }) => {
    console.log("saving tasks");
    setTasks([
      { desc: desc, date: date, id: Date.now(), complete: false },
      ...tasks,
    ]);
  };
  const removeTodo = (id) => {
    const newTodos = [...tasks];
    setTasks((newTodos)=>newTodos.filter((item)=>item.id !== id));
    
  };
  return (
    <div className="App">
      <div className="container">
      <Header></Header>
      <TaskEdit task={{}} onSaveTask={onSaveTask} />      
      <Tasks tasks={tasks}  removeTodo={removeTodo}></Tasks>
      </div>
    </div>
  );
}

export default App;
