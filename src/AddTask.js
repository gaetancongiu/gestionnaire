import React from "react";
import { useForm } from "react-hook-form";

function AddTask(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => props.addTask(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Description"
        name="Description"
        ref={register({ required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Date"
        name="Date"
        ref={register({ required: true, maxLength: 100 })}
      />

      <input type="submit" />
    </form>
  );
}

export default AddTask;
