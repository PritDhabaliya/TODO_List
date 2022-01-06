import { useState } from "react";
import './style.css'
function TaskEdit({ task, onSaveTask }) {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ desc: desc, date: date });

    setDesc("");
    setDate("");
  };
  return (
    <div className="card">
      <form onSubmit={saveTask}>
        <label htmlFor="desc" className="fl">Description</label>
        <input
        className="fl"
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label htmlFor="date"className="">Date</label>
        <input
          className=""
          type="text"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        
          <button className="btn-primary fr" type="submit">
            ADD
          </button>
      </form>
    </div>
  );
}

export default TaskEdit;