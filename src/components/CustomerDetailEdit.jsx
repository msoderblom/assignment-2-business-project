import React from "react";
import { FiCheck, FiX } from "react-icons/fi";
import styled from "styled-components";
import FormInputStyled from "./FormInputStyled";

const EditContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
`;

export default function CustomerDetailEdit({
  setStateValue,
  stateValue,
  handleEdit,
  keyName,
  edit,
  setEdit,
  oldValue,
  label,
  inputType,
}) {
  return (
    <EditContainer>
      <FormInputStyled
        label={label}
        stateVariable={stateValue}
        stateSetVariable={setStateValue}
        inputType={inputType}
      />
      <div>
        <button onClick={() => handleEdit(keyName, stateValue)}>
          <FiCheck color="green" size="20" />
        </button>
        <button
          onClick={() => {
            setStateValue(oldValue);
            setEdit({ ...edit, [keyName]: false });
          }}
        >
          <FiX color="red" size="20" />
        </button>
      </div>
    </EditContainer>
  );
}
