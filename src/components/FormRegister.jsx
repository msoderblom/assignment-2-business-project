import React, { useState } from "react";
import UserKit from "../data/UserKit";
import FormInputStyled from "./FormInputStyled";

export default function FormRegister({ setHasRegistered }) {
  const userKit = new UserKit();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

  const inputObjects = [
    ["First Name", firstName, setFirstName],
    ["last Name", lastName, setLastName],
    ["Email", email, setEmail],
    ["Password", password, setPassword],
    ["Organisation Name", organisationName, setOrganisationName],
    ["Organisation Kind", organisationKind, setOrganisationKind],
  ];

  function handleRegister() {
    userKit
      .register(
        firstName,
        lastName,
        password,
        email,
        organisationName,
        organisationKind
      )
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
      {inputObjects.map((inputItem, index) => {
        const myProps = {
          placeholder: inputItem[0],
          stateVariable: inputItem[1],
          stateSetVariable: inputItem[2],
        };
        return <FormInputStyled {...myProps} key={index} />;
      })}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
