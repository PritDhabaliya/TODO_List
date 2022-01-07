import React from "react";


function Task({ task, removeTodo }) {
    
    return (

      <div className=" text-left" key={task.id}>
        <div className="row">
          <div className="col-10">
            <h4>
                <p className="fl">{task.date}</p>
                {task.desc}{task.id}
            </h4>
          </div>
            
          <div className="col-2 is-center">
          <button className='fr cl'><i className='fa fa-star '></i></button>
          <button className="fr" onClick={removeTodo}>delete</button>
          </div>
          <div className="col-12">
            <p>{task.remarks}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Task;