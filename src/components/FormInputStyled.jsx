import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  appearance: none;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.5);
  padding: 0.5em 0.8em;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
const LabelStyled = styled.label`
  color: white;
  display: block;
  font-size: 0.9em;
  font-weight: 200;
`;

export default function FormInputStyled({
  label,
  placeholder,
  stateVariable,
  stateSetVariable,
  inputType,
}) {
  const type = inputType ? inputType : "text";
  return (
    <div>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled
        type={type}
        placeholder={placeholder}
        value={stateVariable}
        onChange={(e) => stateSetVariable(e.target.value)}
      />
    </div>
  );
}
