import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import UserKit from "../data/UserKit";
import { CustomerListContext } from "../contexts/CustomerListContext";
import FormStyledInput from "./FormStyledInput";
import styled from "styled-components";
import ButtonStyled from "./ButtonStyled";
import { createCustomerSchema } from "../validationSchemas/createCustomerSchema";

const FormWapper = styled.div`
  /* background-color: rgba(209, 76, 137, 0.5); */
  /*  background-color: ${(props) => props.theme.white}; */
  border-radius: 10px;
  padding: 1em;
`;

export default function FormCreateCustomer() {
  const userKit = new UserKit();
  const { setCustomerList } = useContext(CustomerListContext);
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(createCustomerSchema),
  });

  function onSubmit(data) {
    console.log(data);

    userKit.createCustomer(data).then(() => {
      userKit
        .getCustomerList()
        .then((res) => res.json())
        .then((data) => {
          setCustomerList(data.results);
          reset();
        });
    });
  }

  return (
    <FormWapper>
      <h2>Create a new customer</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormStyledInput
          label="Name"
          name="name"
          register={register}
          error={errors.name?.message}
        />

        <FormStyledInput
          label="Organisation Number"
          name="organisationNr"
          register={register}
          error={errors.organisationNr?.message}
        />

        <FormStyledInput
          label="VAT identification number"
          name="vatNr"
          placeholder="SE999999999901"
          register={register}
          error={errors.vatNr?.message}
        />

        <FormStyledInput
          label="Reference"
          name="reference"
          register={register}
        />
        <FormStyledInput
          label="Payment Term (days)"
          name="paymentTerm"
          register={register}
          inputType="number"
          error={errors.paymentTerm?.message}
        />

        <FormStyledInput
          label="Website"
          name="website"
          placeholder="https://example.com"
          register={register}
          inputType="url"
        />
        <FormStyledInput
          label="Email"
          name="email"
          placeholder="org@email.com"
          register={register}
          inputType="email"
        />
        <FormStyledInput
          label="Phone Number"
          name="phoneNumber"
          register={register}
          inputType="tel"
        />

        <ButtonStyled type="submit" title="Create" />
      </form>
    </FormWapper>
  );
}
