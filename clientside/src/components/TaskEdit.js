import { useState } from "react";
import './style.css'
function TaskEdit({ onSaveTask }) {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ desc: desc, date: date });

    setDesc("");
    setDate("");
  };
  return (
    
    <div>
       
      <div>
      <form onSubmit={saveTask} >
        <p className="">
        <label htmlFor="desc" className="fl">Task Name</label>
        <input
        className="fl inp"
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <label htmlFor="date"className="">Date</label>
        <input
          className="inpp"
          type="text"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        
          <button className="btn-primary fr inp1" type="submit">
           <i className="fa fa-plus"></i>
            <h7> ADD TODO</h7>
          </button>
          </p>
      </form>
      </div>
    </div>
  );
}

export default TaskEdit;