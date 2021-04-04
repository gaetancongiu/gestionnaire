function DeleteTask(props) {
  props.forEach(function(props) {
    if (props.isComplete) {
      fetch("https://605375c645e4b30017291be6.mockapi.io/tasks/" + props.id, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify()
      })
        .then(response => {
          return response.json();
        })
        .then(data => console.log(data));
    }
  });

  /*const id = "0";
  fetch("https://605375c645e4b30017291be6.mockapi.io/tasks/" + id, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify()
  })
    .then(response => {
      return response.json();
    })
    .then(data => console.log(data));*/
}
export default DeleteTask;
