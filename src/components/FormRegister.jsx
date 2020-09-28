import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UserKit from "../data/UserKit";
import FormStyledInput from "./FormStyledInput";
import ButtonStyled from "./ButtonStyled";
import HeadingPage from "../atoms/HeadingPage";
import { registerSchema } from "../validationSchemas/registerSchema";

export default function FormRegister({ setHasRegistered }) {
  const userKit = new UserKit();

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(registerSchema),
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
          reset();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <HeadingPage>Register</HeadingPage>
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
        <ButtonStyled type="submit" title="Register" />
      </form>
    </div>
  );
}
