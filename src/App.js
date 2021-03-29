import React, { Component } from "react";
import TaskList from "./TaskList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Liste des Tâches</h1>
        <TaskList />
      </div>
    );
  }
}

export default App;
