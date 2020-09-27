import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { EditCustomerContext } from "../contexts/EditCustomerContext";
import UserKit from "../data/UserKit";
import CustomerDetailEdit from "./CustomerDetailEdit";
import CustomerDetailInfo from "./CustomerDetailInfo";
import FormStyledInput from "./FormStyledInput";

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

const schema = yup.object().shape({
  name: yup.string().required("Name is required."),
  organisationNr: yup
    .string()
    .trim()
    .length(
      10,
      `The organisation number must be 10 digits without spaces in between.`
    ),
  paymentTerm: yup
    .number()
    .typeError("Payment Term is required.")
    .integer("Payment Term must be un integer")
    .min(0, "Payment Term must be a positive number, at least 0.")
    .required("Payment Term is required."),
  email: yup.string().email(),
  vatNr: yup
    .string()
    .matches(
      RegExp(/^(SE)?[0-9]{12}$/),
      "VAT Nr must follow this fotmat: SE999999999901"
    ),
  /* website: yup.string().url(), */
});

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

  //setValue("lastName", "Hopper")

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
    if (edit[keyName]) {
      return (
        <CustomerDetailEdit
          key={`${keyName}Edit`}
          handleEdit={handleEdit}
          keyName={keyName}
          defaultValue={customer[keyName]}
          label={label}
          inputType={inputType}
          schema={yup.object().shape({ [keyName]: schema.fields[keyName] })}
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
