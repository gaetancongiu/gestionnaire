import React from "react";
function TaskList(props) {
  return (
    <div className="TaskList">
      <div className="CurrentTask">
        <ul>
          <li className="TitleCurrentTask">Tâches en cours</li>
          {props.tasks
            .filter(item => item.isComplete === false) //On ne prends que les tâches en cours
            .map((
              item //puis on les affiche sous forme de liste
            ) => (
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
            .filter(item => item.isComplete) //On ne prends que les tâches terminées
            .map((
              item //puis on les affiche sous forme de liste
            ) => (
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
