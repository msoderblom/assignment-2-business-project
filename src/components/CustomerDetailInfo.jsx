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
}) {
  return (
    <div>
      <p>{stateValue}</p>
      <FiEdit
        color="#E0A000"
        size="20"
        onClick={() => setEdit({ ...edit, [keyName]: true })}
      />
    </div>
  );
}
