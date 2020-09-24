import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserKit from "../data/UserKit";
import CustomerDetailEdit from "./CustomerDetailEdit";
import CustomerDetailInfo from "./CustomerDetailInfo";

const Container = styled.div`
  background-color: ${(props) => props.theme.regalBlue};
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

  /*  console.log(Object.entries(customer)); */

  /*  const customerDetailsArr = Object.entries(customer).filter((detail) => {
    return (
      detail[0] !== "parent" && detail[0] !== "address" && detail[0] !== "id"
    );
  }); */

  /*   console.log(customerDetailsArr); */

  const [edit, setEdit] = useState({
    name: false,
    organisationNr: false,
    vatNr: false,
    reference: false,
    paymentTerm: false,
    website: false,
    email: false,
    phoneNumber: false,
  });

  const customerId = customer.id;

  const [name, setName] = useState(customer.name);
  const [organisationNr, setOrganisationNr] = useState(customer.organisationNr);
  const [vatNr, setVatNr] = useState(customer.vatNr);
  const [reference, setReference] = useState(customer.reference);
  const [paymentTerm, setPaymentTerm] = useState(customer.paymentTerm);
  const [website, setWebsite] = useState(customer.website);
  const [email, setEmail] = useState(customer.email);
  const [phoneNumber, setPhoneNumber] = useState(customer.phoneNumber);

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

  function handleEdit(keyName, value) {
    console.log(keyName, value);
    const payload = {
      [keyName]: value,
    };

    userKit
      .updateCustomerDetails(customerId, payload)
      .then(() => setEdit({ ...edit, [keyName]: false }));
  }

  function renderDetails(stateValue, setStateValue, keyName, label, inputType) {
    if (edit[keyName]) {
      return (
        <CustomerDetailEdit
          key={`${keyName}Edit`}
          stateValue={stateValue}
          setStateValue={setStateValue}
          handleEdit={handleEdit}
          keyName={keyName}
          edit={edit}
          setEdit={setEdit}
          oldValue={customer[keyName]}
          label={label}
          inputType={inputType}
        />
      );
    } else {
      return (
        <CustomerDetailInfo
          key={`${keyName}Info`}
          stateValue={stateValue}
          setEdit={setEdit}
          edit={edit}
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
          inputItem.setStateValue,
          inputItem.keyName,
          inputItem.label,
          inputItem.inputType
        );
      })}
    </Container>
  );
}
