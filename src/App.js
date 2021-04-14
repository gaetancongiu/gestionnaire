import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import "./App.css";
import DeleteTask from "./DeleteTask";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const refresh = () => {
    fetch("https://605375c645e4b30017291be6.mockapi.io/tasks") //Récupération de l'API qui contient toutes les tâches
      .then(response => response.json())
      .then(
        result => {
          setItems(
            result.sort((a, b) => {
              return new Date(a.createdAt) - new Date(b.createdAt);
            })
          ); //items prends la valeur du tableau d'objet JSON
          setIsLoaded(true);
          console.log(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    refresh();
  }, []);

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div className="App">
        <h1>Liste des Tâches</h1>
        <TaskList tasks={items} refresh={refresh} />
        <h1>Ajouter une Tâche</h1>
        <AddTask refresh={refresh} />
        <h1>Supprimer les tâches terminées</h1>
        <button onClick={() => DeleteTask(items)}>Supprimer Tâches</button>
      </div>
    );
  }
}

export default App;
