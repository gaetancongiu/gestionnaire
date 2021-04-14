import React from "react";

function TaskList(props) {
  const FinishTask = task =>
    fetch("https://605375c645e4b30017291be6.mockapi.io/tasks/" + task.id, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({ isComplete: Boolean(true) }) //On tranforme la tâche cliqué en tâche terminé
    })
      .then(response => response.json())
      .then(() => props.refresh()); //On rappelle l'API pour que nos 2 listes soit mis à jour

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
                {item.createdAt.substr(0, 10)} : {item.description}
                <button onClick={() => FinishTask(item)}>X</button>
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
