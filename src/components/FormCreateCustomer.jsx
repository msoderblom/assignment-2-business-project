import React, { useState } from "react";
import FormInputStyled from "./FormInputStyled";
import UserKit from "../data/UserKit";

export default function FormCreateCustomer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const userKit = new UserKit();

  function createCustomer() {
    console.log(name, email);
    userKit.createCustomer(name, email);
  }

  return (
    <div>
      <FormInputStyled
        placeholder="Name"
        stateVariable={name}
        stateSetVariable={setName}
      />
      <FormInputStyled
        placeholder="Organization Number"
        stateVariable={name}
        stateSetVariable={setName}
      />
      <FormInputStyled
        placeholder="VAT identification number"
        stateVariable={name}
        stateSetVariable={setName}
      />
      <FormInputStyled
        placeholder="Reference"
        stateVariable={name}
        stateSetVariable={setName}
      />
      <FormInputStyled
        placeholder="Payment Terms (days)"
        stateVariable={name}
        stateSetVariable={setName}
      />
      <FormInputStyled
        placeholder="Website"
        stateVariable={name}
        stateSetVariable={setName}
      />
      <FormInputStyled
        placeholder="Email"
        stateVariable={email}
        stateSetVariable={setEmail}
      />
      <FormInputStyled
        placeholder="Phone number"
        stateVariable={email}
        stateSetVariable={setEmail}
      />

      <button onClick={createCustomer}>Create</button>
    </div>
  );
}
