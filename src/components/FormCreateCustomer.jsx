import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import UserKit from "../data/UserKit";
import { CustomerListContext } from "../contexts/CustomerListContext";

const schema = yup.object().shape({
  name: yup.string().required(),
  paymentTerm: yup.number().required(),
  email: yup.string().email(),
  /* website: yup.string().url(), */
});

export default function FormCreateCustomer() {
  const userKit = new UserKit();
  const { setCustomerList } = useContext(CustomerListContext);
  const { register, handleSubmit } = useForm({
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input name="name" ref={register} />

      <label>Organization Number</label>
      <input name="organisationNr" ref={register} />

      <label>VAT identification number</label>
      <input name="vatNr" ref={register} />

      <label>Reference</label>
      <input name="reference" ref={register} />

      <label>Payment Term (days)</label>
      <input name="paymentTerm" type="number" ref={register} />

      <label>Website</label>
      <input
        name="website"
        type="url"
        placeholder="https://example.com"
        ref={register}
      />

      <label>Email</label>
      <input name="email" type="email" ref={register} />
      <label>Phone Number</label>
      <input name="phoneNumber" type="tel" ref={register} />

      <input type="submit" />
    </form>
  );
}
