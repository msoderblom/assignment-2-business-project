import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import React, { useContext, useEffect } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import styled from "styled-components";
import { EditCustomerContext } from "../contexts/EditCustomerContext";
import FormStyledInput from "./FormStyledInput";
import { useForm } from "react-hook-form";
import EditButton from "./EditButton";

const EditContainer = styled.div`
  -ms-touch-action: manipulation;
  touch-action: manipulation;
`;

const Form = styled.form`
  display: flex;
  align-items: flex-end;

  justify-content: space-between;
`;
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 5px;
  align-items: center;
  justify-items: center;
  padding: 0.2em 0 0.2em 10px;
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
      <Form onSubmit={handleSubmit(handleEdit)}>
        <FormStyledInput
          label={label}
          name={keyName}
          register={register}
          inputType={inputType}
          error={errors[keyName]?.message}
        />
        <ButtonWrapper>
          <EditButton type="submit">
            <FiCheck color="green" size="20" />
          </EditButton>
          <EditButton
            action={() => {
              setEdit({ ...edit, [keyName]: false });
            }}
          >
            <FiX color="red" size="20" />
          </EditButton>
        </ButtonWrapper>
      </Form>
    </EditContainer>
  );
}
