import React, { useContext } from "react";
import { FiEdit } from "react-icons/fi";
import styled from "styled-components";
import { EditCustomerContext } from "../contexts/EditCustomerContext";
import EditButton from "./EditButton";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.p`
  font-weight: 200;
  font-size: 0.9em;
`;

export default function CustomerDetailInfo({ stateValue, keyName, label }) {
  const { edit, setEdit } = useContext(EditCustomerContext);
  return (
    <Container>
      <div>
        <Label>{label}</Label>
        <p>{stateValue}</p>
      </div>
      <EditButton
        action={() => {
          setEdit({ ...edit, [keyName]: true });
        }}
      >
        <FiEdit color="#E0A000" size="20" />
      </EditButton>
    </Container>
  );
}
