import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import React, { useContext, useEffect } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import styled from "styled-components";
import { EditCustomerContext } from "../contexts/EditCustomerContext";
import FormInputStyled from "./FormInputStyled";
import FormStyledInput from "./FormStyledInput";
import { useForm } from "react-hook-form";

const EditContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
`;

export default function CustomerDetailEdit({
  handleEdit,
  keyName,
  defaultValue,
  label,
  inputType,
  schema,
}) {
  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
  });
  const { edit, setEdit } = useContext(EditCustomerContext);

  console.log(schema);
  useEffect(() => {
    setValue(keyName, defaultValue);
    // eslint-disable-next-line
  }, []);
  return (
    <EditContainer>
      <form onSubmit={handleSubmit(handleEdit)}>
        <FormStyledInput
          label={label}
          name={keyName}
          register={register}
          inputType={inputType}
          error={errors[keyName]?.message}
        />
        <div>
          <button
            type="submit" /* onClick={() => handleEdit(keyName, stateValue)} */
          >
            <FiCheck color="green" size="20" />
          </button>
          <button
            onClick={() => {
              /*  setStateValue(oldValue); */
              setEdit({ ...edit, [keyName]: false });
            }}
          >
            <FiX color="red" size="20" />
          </button>
        </div>
      </form>
    </EditContainer>
  );
}
