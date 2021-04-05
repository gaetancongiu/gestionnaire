function DeleteTask(items) {
  items.forEach(function(element) {
    //On parcourt chaque élément du tableaud d'objet json.
    if (element.isComplete) {
      //On regarde si isComplete vaut true
      fetch("https://605375c645e4b30017291be6.mockapi.io/tasks/" + element.id, {
        //On supprime la tâche
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify()
      }).then(response => {
        return response.json();
      });
    }
  });
}
export default DeleteTask;
