import Task from "./Task";
function Tasks({ tasks,removeTodo }) {
    return (
      <div className="row">
        {tasks.map((task) => (
        <Task task={task} removeTodo={(e) =>removeTodo(task.id)} key={task.id} />
      ))}
      <div className="col-12"></div>
      </div>
    );
  }
  
  export default Tasks;