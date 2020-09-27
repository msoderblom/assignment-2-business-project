import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UserKit from "../data/UserKit";
import FormStyledInput from "./FormStyledInput";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required.")
    .trim()
    .min(1, "First name must be at least 1 character.")
    .max(30, `First name can't be more than 30 character.`),
  lastName: yup
    .string()
    .required("Last name is required.")
    .trim()
    .min(1, "Last name must be at least 1 character.")
    .max(30, `Last name can't be more than 30 character.`),
  email: yup.string().email().required(),
  password: yup.string().required(),
  organisationName: yup.string().required(),
  organisationKind: yup.string().required(),
});

// first name: maxLength:30 minLength: 1
// Last name: maxLength:30 minLength: 1
// 0, 1 ,2 på org kind
// password minst 8 tecken
// This password is too common. This password is completely digital.
// kolla så att det inte bara är siffror
// 1234567u: This password is too common
// 1234683y: Godkänt
// email: Un objet user avec ce champ adresse électronique existe déjà. ??

export default function FormRegister({ setHasRegistered }) {
  const userKit = new UserKit();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const inputObjects = [
    {
      label: "First Name",
      name: "firstName",
      error: errors.firstName?.message,
    },
    { label: "Last Name", name: "lastName", error: errors.lastName?.message },
    {
      label: "Email",
      name: "email",
      error: errors.email?.message,
      placeholder: "name@email.com",
      inputType: "email",
    },
    {
      label: "Password",
      name: "password",
      error: errors.password?.message,
      inputType: "password",
    },
    {
      label: "Organisation Name",
      name: "organisationName",
      error: errors.organisationName?.message,
    },
    {
      label: "Organisation Kind",
      name: "organisationKind",
      error: errors.organisationKind?.message,
      placeholder: "0, 1 or 2",
    },
  ];

  function handleRegister(data) {
    console.log(data);
    userKit
      .register(data)
      .then((res) => {
        if (res.ok) {
          setHasRegistered(true);
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h2>Register</h2>
      <p>Enter details to register</p>

      <form onSubmit={handleSubmit(handleRegister)}>
        {inputObjects.map((inputItem, index) => {
          const myProps = {
            label: inputItem.label,
            name: inputItem.name,
            error: inputItem.error,
            placeholder: inputItem.placeholder,
            inputType: inputItem.inputType,
            register: register,
          };
          return <FormStyledInput {...myProps} key={index} />;
        })}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
