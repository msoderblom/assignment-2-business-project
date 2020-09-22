import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  border-radius: 5px;
`;

export default function FormInputStyled({
  placeholder,
  stateVariable,
  stateSetVariable,
}) {
  return (
    <div>
      <label>{placeholder} </label>
      <InputStyled
        placeholder={placeholder}
        value={stateVariable}
        onChange={(e) => stateSetVariable(e.target.value)}
      />
    </div>
  );
}
