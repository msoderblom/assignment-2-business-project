import React, { useState } from "react";
import FormInputStyled from "./FormInputStyled";
import UserKit from "../data/UserKit";

export default function FormCreateCustomer() {
  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState(Number);
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const userKit = new UserKit();

  function createCustomer() {
    console.log(
      name,
      organisationNr,
      vatNr,
      reference,
      paymentTerm,
      website,
      email,
      phoneNumber
    );
    userKit.createCustomer(
      name,
      organisationNr,
      vatNr,
      reference,
      paymentTerm,
      website,
      email,
      phoneNumber
    );
  }

  return (
    <div>
      <FormInputStyled
        label="Name"
        stateVariable={name}
        stateSetVariable={setName}
      />
      <FormInputStyled
        label="Organization Number"
        placeholder="Organization Number"
        stateVariable={organisationNr}
        stateSetVariable={setOrganisationNr}
      />
      <FormInputStyled
        label="VAT identification number"
        placeholder="VAT identification number"
        stateVariable={vatNr}
        stateSetVariable={setVatNr}
      />
      <FormInputStyled
        label="Reference"
        placeholder="Reference"
        stateVariable={reference}
        stateSetVariable={setReference}
      />
      <FormInputStyled
        label="Payment Terms (days)"
        placeholder="Payment Terms"
        stateVariable={paymentTerm}
        stateSetVariable={setPaymentTerm}
      />
      <FormInputStyled
        label="Website"
        placeholder="organization.com"
        stateVariable={website}
        stateSetVariable={setWebsite}
      />
      <FormInputStyled
        label="Email"
        placeholder="organization@email.com"
        stateVariable={email}
        stateSetVariable={setEmail}
      />
      <FormInputStyled
        label="Phone number"
        placeholder=""
        stateVariable={phoneNumber}
        stateSetVariable={setPhoneNumber}
      />

      <button onClick={createCustomer}>Create</button>
    </div>
  );
}
