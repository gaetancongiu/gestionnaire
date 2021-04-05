import React from "react";
function TaskList(props) {
  return (
    <div className="TaskList">
      <div className="CurrentTask">
        <ul>
          <li className="TitleCurrentTask">Tâches en cours</li>
          {props.tasks
            .filter(item => item.isComplete === false)
            .map(item => (
              <li key={item.id}>
                {item.createdAt} : {item.description}
              </li>
            ))}
        </ul>
      </div>
      <div className="FinishTask">
        <ul>
          <li className="TitleFinishTask">Tâches terminées</li>
          {props.tasks
            .filter(item => item.isComplete)
            .map(item => (
              <li key={item.id}>
                {item.createdAt} : {item.description}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default TaskList;
