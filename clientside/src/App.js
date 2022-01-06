import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import TaskEdit from './components/TaskEdit';
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { desc: "Learn React", id: 1, date: "5/1/21", complete:false},
    { desc: "Profit", id: 2, date:"5/1/21", complete:false },
  ]);
 
  const onSaveTask = ({ desc, date }) => {
    console.log("saving tasks");
    setTasks([
      { desc: desc, date: date, id: Date.now(), complete: false },
      ...tasks,
    ]);
  };
  
  return (
    <div className="App">
     
      

      <div className="container">
      <Header></Header>
      <TaskEdit task={{}} onSaveTask={onSaveTask} />      
        <Tasks tasks={tasks}></Tasks>
      </div>
    </div>
  );
}

export default App;
