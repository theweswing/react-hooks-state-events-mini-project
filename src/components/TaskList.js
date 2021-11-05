import React, {useState} from "react";
import Task from "./Task"

function TaskList({set_active_tasks_, active_tasks_}) {

  function display_tasks(){
    const tasks_to_display=active_tasks_
    return (
      (tasks_to_display).map((given_task) => {
        return (<Task set_active_tasks__={set_active_tasks_} active_tasks__={active_tasks_} task_text={given_task.text} task_category={given_task.category} key={given_task.text} />)
      })
    )
    }
  return (
    <div className="tasks">
      {display_tasks()}
    </div>
  );
}

export default TaskList;
