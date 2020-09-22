import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  appearance: none;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.5);
  padding: 0.5em 0.8em;
`;
const LabelStyled = styled.label`
  color: black;
  display: block;
`;

export default function FormInputStyled({
  label,
  placeholder,
  stateVariable,
  stateSetVariable,
}) {
  return (
    <div>
      <LabelStyled>{label} </LabelStyled>
      <InputStyled
        placeholder={placeholder}
        value={stateVariable}
        onChange={(e) => stateSetVariable(e.target.value)}
      />
    </div>
  );
}
