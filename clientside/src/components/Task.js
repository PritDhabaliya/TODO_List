import React from "react";
import { useState } from "react";
import './style.css'
function Task({ task, removeTodo }) {
    const [style, setStyle] = useState("cont");
    const changecolor = () => {
      console.log("you just clicked");
      setStyle("cont2");
    };
    
    return (

      <div className=" text-left" key={task.id}>
        <div className="row">
          <div className="col-10">
            <h4>
                <p className="fl">{task.date}</p>
                {task.desc}
            </h4>
          </div>
            
          <div className="col-2 is-center">
          <p className="fr bg"><button  className={style} onClick={changecolor}><i className='fa fa-star '></i></button>
          <button className="bg" onClick={removeTodo}><i class="fas fa-trash"></i>   delete</button></p>
          </div>
         
        </div>
      </div>
    );
  }
  
  export default Task;