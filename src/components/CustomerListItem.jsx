import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListItem = styled.li`
  font-size: 16px;
  background-color: ${(props) => props.theme.white};
  color: black;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px 0 rgba(201, 201, 201, 0.5);
  a {
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Name = styled.p`
  font-size: 1.5em;
  color: ${(props) => props.theme.mulberry};
`;

export default function CustomerListItem({ customer }) {
  const id = customer.id;
  const name = customer.name;
  const organisationNr = customer.organisationNr;
  const reference = customer.reference;
  return (
    <ListItem>
      <Link to={`customer/${id}`}>
        <Name>{name}</Name>
        <p>Org. Nr: {organisationNr}</p>
        <p>Reference: {reference}</p>
      </Link>
    </ListItem>
  );
}
