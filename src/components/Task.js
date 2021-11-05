import React, {useState} from "react";

function Task({task_text,task_category,set_task_for_deletion_,set_active_tasks__,active_tasks__,task_for_deletion__}) {
  const [task_for_deletion,set_task_for_deletion]=useState("")

  function handle_delete_button(event){
    set_task_for_deletion(event.target.value)
    const tasks_minus_deletion=active_tasks__.filter((given_task) => {return (given_task.text !==event.target.value)})
    set_active_tasks__(tasks_minus_deletion)}

  return (
    <div className="task">
      <div className="label">{task_category}</div>
      <div className="text">{task_text}</div>
      <button onClick={handle_delete_button} className="delete" value={task_text}>X</button>
    </div>
  );
}

export default Task;
