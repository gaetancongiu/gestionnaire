import React from "react";

function TaskList(props) {
  return (
    <ul>
      {props.tasks.map(item => (
        <li key={item.id}>
          {item.description} {item.createdAt} {item.isComplete}
        </li>
      ))}
    </ul>
  );
}
export default TaskList;
