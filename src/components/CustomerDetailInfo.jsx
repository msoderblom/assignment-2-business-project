import React from "react";
import { FiEdit } from "react-icons/fi";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.p`
  font-weight: 200;
  font-size: 0.9em;
`;

export default function CustomerDetailInfo({
  stateValue,
  setEdit,
  edit,
  keyName,
  label,
}) {
  return (
    <Container>
      <div>
        <Label>{label}</Label>
        <p>{stateValue}</p>
      </div>
      <button onClick={() => setEdit({ ...edit, [keyName]: true })}>
        <FiEdit color="#E0A000" size="20" />
      </button>
    </Container>
  );
}
