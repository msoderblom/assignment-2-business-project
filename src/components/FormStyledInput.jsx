import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  appearance: none;
  border: none;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(201, 201, 201, 0.5);
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
export const Error = styled.span`
  color: ${(props) => props.theme.terraCotta};
  font-size: 0.8em;
  font-weight: 300;
`;

export default function FormStyledInput({
  label,
  name,
  placeholder,
  register,
  inputType,
  error,
}) {
  const type = inputType ? inputType : "text";
  return (
    <div>
      <LabelStyled>{label}</LabelStyled>

      <InputStyled
        name={name}
        type={type}
        placeholder={placeholder}
        ref={register}
      />
      {error && <Error>{error}</Error>}
    </div>
  );
}
