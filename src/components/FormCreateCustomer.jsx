import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import UserKit from "../data/UserKit";
import { CustomerListContext } from "../contexts/CustomerListContext";
import FormStyledInput from "./FormStyledInput";
import styled from "styled-components";

const FormWapper = styled.div`
  background-color: ${(props) => props.theme.regalBlue};
  padding: 1em;
`;

const vatNrRegex = RegExp(/^(SE)?[0-9]{12}$/);

const schema = yup.object().shape({
  name: yup.string().required("Name is required."),
  organisationNr: yup
    .string()
    .trim()
    .length(
      10,
      `The organisation number must be 10 digits without spaces in between.`
    ),
  paymentTerm: yup
    .number()
    .typeError("Payment Term is required.")
    .integer("Payment Term must be un integer")
    .min(0, "Payment Term must be a positive number, at least 0.")
    .required("Payment Term is required."),
  email: yup.string().email(),
  vatNr: yup
    .string()
    .matches(vatNrRegex, "VAT Nr must follow this fotmat: SE999999999901"),
  /* website: yup.string().url(), */
});

export default function FormCreateCustomer() {
  const userKit = new UserKit();
  const { setCustomerList } = useContext(CustomerListContext);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);

    userKit.createCustomer(data).then(() => {
      userKit
        .getCustomerList()
        .then((res) => res.json())
        .then((data) => setCustomerList(data.results));
    });
  }

  return (
    <FormWapper>
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
        {/*   <p>{errors.organisationNr?.message}</p> */}
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

        <button type="submit">Create</button>
      </form>
    </FormWapper>
  );
}
