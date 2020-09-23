import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserKit from "../data/UserKit";
import CustomerDetailEdit from "./CustomerDetailEdit";
import CustomerDetailInfo from "./CustomerDetailInfo";

const Container = styled.div`
  padding: 1em;
`;

export default function CustomerDetails({ customer }) {
  const userKit = new UserKit();

  console.log(Object.entries(customer));

  const customerDetailsArr = Object.entries(customer).filter((detail) => {
    return (
      detail[0] !== "parent" && detail[0] !== "address" && detail[0] !== "id"
    );
  });

  console.log(customerDetailsArr);

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
  const [reference, setReference] = useState(customer.reference);
  const [name, setName] = useState(customer.name);
  const customerId = customer.id;

  function handleEdit(keyName, value) {
    console.log(keyName, value);
    const payload = {
      [keyName]: value,
    };

    userKit
      .updateCustomerDetails(customerId, payload)
      .then(() => setEdit({ ...edit, [keyName]: false }));
  }

  function renderDetails() {
    if (edit.name) {
      return (
        <CustomerDetailEdit
          setStateValue={setName}
          stateValue={name}
          handleEdit={handleEdit}
          keyName={"name"}
          edit={edit}
          setEdit={setEdit}
        />
      );
    } else {
      return (
        <CustomerDetailInfo
          stateValue={name}
          setEdit={setEdit}
          edit={edit}
          keyName="name"
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
      <h3>{customer.name}</h3>

      {renderDetails()}
      {edit.reference ? (
        <CustomerDetailEdit
          setStateValue={setReference}
          stateValue={reference}
          handleEdit={handleEdit}
          keyName={"reference"}
          edit={edit}
          setEdit={setEdit}
        />
      ) : (
        <div>
          <CustomerDetailInfo
            stateValue={reference}
            setEdit={setEdit}
            edit={edit}
            keyName="reference"
          />
        </div>
      )}
      {/*  <p>{customer.organisationNr}</p>
      <p>{customer.vatNr}</p>
      {edit.reference ? (
        <div>
          <input
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />
          <FiCheck
            color="green"
            size="20"
            onClick={() => handleEdit("reference", reference)}
          />
          <FiX
            color="red"
            size="20"
            onClick={() => setEdit({ ...edit, reference: false })}
          />
        </div>
      ) : (
        <div>
          <p>{customer.reference}</p>
          <FiEdit
            color="#E0A000"
            size="20"
            onClick={() => setEdit({ ...edit, reference: true })}
          />
        </div>
      )}
      <p>{customer.paymentTerm}</p>
      <a href={customer.website} target="_blank" rel="noopener noreferrer">
        {customer.website}
      </a>
      <p>{customer.email}</p>
      <p>{customer.phoneNumber}</p> */}
    </Container>
  );
}
