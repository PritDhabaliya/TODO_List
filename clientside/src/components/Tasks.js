import Task from "./Task";
function Tasks({ tasks }) {
    return (
      <div className="row">
        {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
      <div className="col-12"></div>
      </div>
    );
  }
  
  export default Tasks;