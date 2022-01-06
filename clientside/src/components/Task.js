import React from "react";
import { useState } from "react";

function Task({ task, removeTodo }) {
    const [id, setid] = useState(2);
    const remove = () => {
        removeTodo({ id:id});
        
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
          <button className='fr cl'><i className='fa fa-star '></i></button>
          <button className="fr" onClick={remove}>delete</button>
          </div>
          <div className="col-12">
            <p>{task.remarks}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Task;