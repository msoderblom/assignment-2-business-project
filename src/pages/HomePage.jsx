import React from "react";
import CustomerList from "../components/CustomerList";
import FormCreateCustomer from "../components/FormCreateCustomer";

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <CustomerList />

      <FormCreateCustomer></FormCreateCustomer>
    </div>
  );
}
