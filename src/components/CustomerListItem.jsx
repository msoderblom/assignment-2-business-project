import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListItem = styled.li`
  background-color: ${(props) => props.theme.regalBlue};
  color: white;
  border-radius: 5px;
  padding: 10px;
  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function CustomerListItem({ customer }) {
  const id = customer.id;
  const name = customer.name;
  const organisationNr = customer.organisationNr;
  const reference = customer.reference;
  return (
    <ListItem>
      <Link to={`customer/${id}`}>
        <p>{name}</p>
        <p>Org. Nr: {organisationNr}</p>
        <p>Reference: {reference}</p>
      </Link>
    </ListItem>
  );
}
