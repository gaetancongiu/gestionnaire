function DeleteTask(props) {
  props.forEach(function(element) {
    if (element.isComplete) {
      fetch("https://605375c645e4b30017291be6.mockapi.io/tasks/" + element.id, {
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
