import { useForm } from "react-hook-form";

function AddTask(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (
    data //Récupération des données entrées par l'utilisateur une fois qu'il a cliqué sur le bouton
  ) =>
    fetch("https://605375c645e4b30017291be6.mockapi.io/tasks/", {
      //Intégration de ces nouvelles données dans l'API en ligne
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data, (data.isComplete = false))
    })
      .then(response => response.json())
      .then(() => props.refresh());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Description"
        name="description"
        ref={register({ required: true })}
      />
      <input
        type="datetime-local"
        name="createdAt"
        ref={register({
          required: true
        })}
      />
      <input type="submit" />
    </form>
  );
}

export default AddTask;
