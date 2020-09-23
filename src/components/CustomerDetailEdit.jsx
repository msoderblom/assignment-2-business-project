import React from "react";
import { FiCheck, FiX } from "react-icons/fi";
import styled from "styled-components";

const EditContainer = styled.div`
  display: flex;
`;

export default function CustomerDetailEdit({
  setStateValue,
  stateValue,
  handleEdit,
  keyName,
  edit,
  setEdit,
}) {
  return (
    <EditContainer>
      <input
        value={stateValue}
        onChange={(e) => setStateValue(e.target.value)}
      />
      <FiCheck
        color="green"
        size="20"
        onClick={() => handleEdit(keyName, stateValue)}
      />
      <FiX
        color="red"
        size="20"
        onClick={() => setEdit({ ...edit, [keyName]: false })}
      />
    </EditContainer>
  );
}