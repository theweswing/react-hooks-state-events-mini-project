import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [all_tasks,set_all_tasks]=useState(TASKS)
  const [active_tasks,set_active_tasks]=useState(TASKS)
  const [active_categories,set_active_categories]=useState(CATEGORIES)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter all_tasks_={all_tasks} active_categories_={active_categories} set_active_categories={set_active_categories} active_tasks_={active_tasks} set_active_tasks_={set_active_tasks}/>
      <NewTaskForm active_categories_={active_categories} all_tasks_={all_tasks} active_tasks_={active_tasks} set_active_categories_={set_active_categories} set_active_tasks_={set_active_tasks} set_all_tasks_={set_all_tasks}/>
      <TaskList set_active_tasks_={set_active_tasks} active_tasks_={active_tasks}/>
    </div>
  );
}

export default App;
