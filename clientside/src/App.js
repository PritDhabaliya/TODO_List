import './App.css';

import "./style.css";
import Header from './components/Header';
import Tasks from './components/Tasks';
function App() {
  
  return (
    
    <div className="App">
     <Header></Header>
     <button className="button">New</button>
     <Tasks></Tasks>
     
    </div>
  );
}

export default App;
