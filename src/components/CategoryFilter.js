import React from "react";

function CategoryFilter({active_tasks_,set_active_tasks_,active_categories_,set_active_categories_,all_tasks_}) {

  function handle_category_filter (e){
    const filtered_tasks=all_tasks_.filter((given_task) => {
      if (e.target.value==="All") {
        return given_task
      }
      else {
        return given_task.category === e.target.value
      }
    })
    set_active_tasks_(filtered_tasks)
  }
  function display_categories(){
    const categories_to_display=active_categories_
    return (categories_to_display.map((givenCategory) => {
      return (<button onClick={handle_category_filter} value={givenCategory}>{givenCategory}</button>)
    }))}

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {display_categories()}
    </div>
  );
}

export default CategoryFilter;
