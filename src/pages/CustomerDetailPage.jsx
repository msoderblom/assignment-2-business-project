import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CustomerDetails from "../components/CustomerDetails";
import ButtonStyled from "../components/ButtonStyled";
import UserKit from "../data/UserKit";
import { EditCustomerContext } from "../contexts/EditCustomerContext";
import styled from "styled-components";
import { buttonCSS } from "../components/ButtonStyled";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeleteButton = styled.button`
  ${buttonCSS}
  max-width: 150px;
  align-self: flex-end;
`;

export default function CustomerDetailPage(props) {
  const userKit = new UserKit();
  const [customerObj, setCustomerObj] = useState(null);
  const customerId = props.match.params.id;
  const history = useHistory();

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

  function getCustomer() {
    console.log(customerId);
    userKit
      .getCustomerDetails(customerId)
      .then((res) => res.json())
      .then((data) => {
        setCustomerObj(data);
        console.log(data);
      });
  }
  function deleteCustomer() {
    console.log(customerId);
    userKit.deleteCustomerDetails(customerId).then(() => history.push("/home"));
  }

  useEffect(() => {
    getCustomer();

    // eslint-disable-next-line
  }, []);
  return (
    <>
      <EditCustomerContext.Provider value={{ edit, setEdit }}>
        <PageWrapper>
          <DeleteButton onClick={deleteCustomer}>Delete Customer</DeleteButton>
          {customerObj && <CustomerDetails customer={customerObj} />}
        </PageWrapper>
      </EditCustomerContext.Provider>
    </>
  );
}
