import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
  email: yup.string().email(),
  /* website: yup.string().url(), */
});

export default function FormCreateCustomer() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" ref={register} />
      <input name="age" type="number" ref={register} />
      <input name="email" type="email" ref={register} />
      <input name="website" ref={register} />
      <input type="submit" />
    </form>
  );
}
