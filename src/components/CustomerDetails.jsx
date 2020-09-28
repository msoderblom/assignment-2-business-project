import * as yup from "yup";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { EditCustomerContext } from "../contexts/EditCustomerContext";
import UserKit from "../data/UserKit";
import CustomerDetailEdit from "./CustomerDetailEdit";
import CustomerDetailInfo from "./CustomerDetailInfo";
import { createCustomerSchema } from "../validationSchemas/createCustomerSchema";

const Container = styled.div`
  background-color: ${(props) => props.theme.blackcurrant};
  padding: 2em;
  display: grid;
  gap: 1em;
  color: white;

  @media screen and (max-width: 767px) {
    padding: 1em;
  }
`;

export default function CustomerDetails({ customer }) {
  const userKit = new UserKit();

  const { edit, setEdit } = useContext(EditCustomerContext);

  const customerId = customer.id;

  const [name, setName] = useState(checkIfNull(customer.name));
  const [organisationNr, setOrganisationNr] = useState(
    checkIfNull(customer.organisationNr)
  );
  const [vatNr, setVatNr] = useState(checkIfNull(customer.vatNr));
  const [reference, setReference] = useState(checkIfNull(customer.reference));
  const [paymentTerm, setPaymentTerm] = useState(customer.paymentTerm);
  const [website, setWebsite] = useState(checkIfNull(customer.website));
  const [email, setEmail] = useState(checkIfNull(customer.email));
  const [phoneNumber, setPhoneNumber] = useState(
    checkIfNull(customer.phoneNumber)
  );

  function checkIfNull(value) {
    return value === null ? "" : value;
  }

  const inputList = [
    {
      stateValue: name,
      setStateValue: setName,
      keyName: "name",
      label: "Name",
      inputType: "text",
    },
    {
      stateValue: organisationNr,
      setStateValue: setOrganisationNr,
      keyName: "organisationNr",
      label: "Organization Number",
      inputType: "text",
    },
    {
      stateValue: vatNr,
      setStateValue: setVatNr,
      keyName: "vatNr",
      label: "VAT identification number",
      inputType: "text",
    },

    {
      stateValue: reference,
      setStateValue: setReference,
      keyName: "reference",
      label: "Reference",
      inputType: "text",
    },
    {
      stateValue: paymentTerm,
      setStateValue: setPaymentTerm,
      keyName: "paymentTerm",
      label: "Payment Term (days)",
      inputType: "number",
    },
    {
      stateValue: website,
      setStateValue: setWebsite,
      keyName: "website",
      label: "Website",
      inputType: "text",
    },
    {
      stateValue: email,
      setStateValue: setEmail,
      keyName: "email",
      label: "Email",
      inputType: "email",
    },
    {
      stateValue: phoneNumber,
      setStateValue: setPhoneNumber,
      keyName: "phoneNumber",
      label: "Phone Number",
      inputType: "text",
    },
  ];

  function handleEdit(data) {
    console.log("form data: ", data);
    console.log(Object.keys(data)[0]);

    const keyName = Object.keys(data)[0];

    const payload = data;

    userKit.updateCustomerDetails(customerId, payload).then(() => {
      setEdit({ ...edit, [keyName]: false });
      const setStateFunc = inputList.find((input) => input.keyName === keyName)
        .setStateValue;

      setStateFunc(data[keyName]);
    });
  }

  function renderDetails(stateValue, keyName, label, inputType) {
    const validationSchema = yup
      .object()
      .shape({ [keyName]: createCustomerSchema.fields[keyName] });

    if (edit[keyName]) {
      return (
        <CustomerDetailEdit
          key={`${keyName}Edit`}
          handleEdit={handleEdit}
          keyName={keyName}
          defaultValue={stateValue}
          label={label}
          inputType={inputType}
          schema={validationSchema}
        />
      );
    } else {
      return (
        <CustomerDetailInfo
          key={`${keyName}Info`}
          stateValue={stateValue}
          keyName={keyName}
          label={label}
        />
      );
    }
  }

  useEffect(() => {
    renderDetails();

    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <h3>{name}</h3>

      {inputList.map((inputItem) => {
        return renderDetails(
          inputItem.stateValue,
          inputItem.keyName,
          inputItem.label,
          inputItem.inputType
        );
      })}
    </Container>
  );
}
