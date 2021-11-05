import React, {useState} from "react";

function NewTaskForm({all_tasks_,active_tasks_,active_categories_,set_all_tasks_,set_active_tasks_,set_active_categories_}) {
    const [submitted_task_text,set_submitted_task_text] = useState("")
    const [submitted_task_cat,set_submitted_task_cat]=useState("")

      let new_task_text
      function handle_task_text_input(e){
        console.log(e.target.value)
        new_task_text=e.target.value
      }

      let new_task_cat
      function handle_task_cat_input(e){
        new_task_cat=e.target.value
        console.log(e.target.value)
      }

      function display_categories(){
        return (
          active_categories_.map((given_category) => {
            if (given_category != "All"){
            return (<option value={given_category} key={given_category}>{given_category}</option>)
          }})
        )}

      function handle_new_task(e){
        e.preventDefault()
        const task_object={
          text: new_task_text,
          category: new_task_cat
        }
        const new_array=[...all_tasks_,task_object]
        set_active_tasks_(new_array)
        set_all_tasks_(new_array)
      }      
  
  return (
    <form className="new-task-form">
      <label>
        Details
        <input onChange={handle_task_text_input}type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handle_task_cat_input} name="category">
          {display_categories()}
        </select>
      </label>
      <input onClick={handle_new_task} type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;