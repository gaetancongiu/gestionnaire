import React, { useState, useEffect } from "react";

function TaskList() {
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

  /*
    const fetchData = async () => {
      const result = await axios(
        "https://605375c645e4b30017291be6.mockapi.io/tasks"
      );
      setData(result.data);
    };
    fetchData();
  }, []);
*/

  /*
    fetch("https://605375c645e4b30017291be6.mockapi.io/tasks")
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState(result);
      })
  };
  */
  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.description} {item.createdAt} {item.isComplete}
          </li>
        ))}
      </ul>
    );
  }
}
export default TaskList;
