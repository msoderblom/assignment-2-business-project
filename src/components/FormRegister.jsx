import { yupResolver } from "@hookform/resolvers";
import React from "react";
import { useForm } from "react-hook-form";
import UserKit from "../data/UserKit";
import FormStyledInput, { Error } from "./FormStyledInput";
import ButtonStyled from "./ButtonStyled";
import HeadingPage from "../atoms/HeadingPage";
import { registerSchema } from "../validationSchemas/registerSchema";
import styled from "styled-components";

const RegisterError = styled(Error)`
  font-size: 1em;
`;

const FormStyled = styled.form`
  display: grid;
  gap: 8px;
`;

export default function FormRegister({ setHasRegistered }) {
  const userKit = new UserKit();

  const { register, handleSubmit, errors, reset, setError } = useForm({
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

    userKit.checkEmailExits(data.email).then((res) => {
      console.log(res);

      if (res.ok) {
        // If the email already exists
        console.log("email already exists");
        setError("email", {
          type: "manual",
          message: "This email is already in use. Please use another one.",
        });
      } else {
        // If the email is not in use

        userKit.register(data).then((res) => {
          if (res.ok) {
            setHasRegistered(true);
            reset();
          } else {
            setError("registerError", {
              type: "manual",
              message:
                "Something went wrong with your registration. Please try again.",
            });
          }
        });
      }
    });
  }

  return (
    <div>
      <HeadingPage>Register</HeadingPage>
      <p>Enter details to register</p>

      <FormStyled onSubmit={handleSubmit(handleRegister)}>
        <RegisterError> {errors.registerError?.message}</RegisterError>
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
      </FormStyled>
    </div>
  );
}
