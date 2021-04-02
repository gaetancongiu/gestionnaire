import React from "react";

function TaskList(props) {
  return (
    <div className="Liste des tâches">
      <h1>Tâches en cours</h1>
      <ul>
        {props.tasks
          .filter(item => item.isComplete === false)
          .map(item => (
            <li key={item.id}>
              {item.description} {item.createdAt} {item.isComplete}
            </li>
          ))}
      </ul>
      <h1>Tâches terminées</h1>
      <ul>
        {props.tasks
          .filter(item => item.isComplete)
          .map(item => (
            <li key={item.id}>
              {item.description} {item.createdAt} {item.isComplete}
            </li>
          ))}
      </ul>
    </div>
  );
}
export default TaskList;
