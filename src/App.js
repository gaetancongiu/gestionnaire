import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://605375c645e4b30017291be6.mockapi.io/tasks")
      .then(response => response.json())
      .then(
        result => {
          setItems(result);
          setIsLoaded(true);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div className="App">
        <h1>Ajouter une Tâche</h1>
        <AddTask />
        <h1>Liste des Tâches</h1>
        <TaskList tasks={items} />
      </div>
    );
  }
}

export default App;
