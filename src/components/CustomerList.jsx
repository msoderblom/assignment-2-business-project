import React, { useContext, useEffect } from "react";
import UserKit from "../data/UserKit";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { Link } from "react-router-dom";
import CustomerListItem from "./CustomerListItem";
import styled from "styled-components";

const UlStyled = styled.ul`
  padding: 0;
  display: grid;
  gap: 5px;
  list-style: none;
`;

export default function CustomerList() {
  const userKit = new UserKit();
  const { customerList, setCustomerList } = useContext(CustomerListContext);

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
        console.log(data.results);
      });
  }

  useEffect(() => {
    getCustomerList();

    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h2>Your Customers</h2>
      <UlStyled>
        {customerList &&
          customerList.map((customer) => {
            const id = customer.id;

            return <CustomerListItem key={id} customer={customer} />;
          })}
      </UlStyled>
    </div>
  );
}
