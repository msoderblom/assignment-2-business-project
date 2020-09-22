import React from "react";
import CustomerList from "../components/CustomerList";
import FormCreateCustomer from "../components/FormCreateCustomer";
import UserKit from "../data/UserKit";

export default function HomePage() {
  const userKit = new UserKit();

  return (
    <div>
      <h2>Home</h2>
      <CustomerList />

      <FormCreateCustomer></FormCreateCustomer>
    </div>
  );
}
