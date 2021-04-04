import { useForm } from "react-hook-form";

function AddTask(s) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data =>
    fetch("https://605375c645e4b30017291be6.mockapi.io/tasks/", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data, (data.isComplete = false))
    }).then(response => response.json());
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Description"
        name="description"
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="YYYY-MM-DD"
        name="createAt"
        ref={register({
          required: true,
          pattern: /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/i
        })}
      />
      <input type="submit" />
    </form>
  );
}

export default AddTask;
