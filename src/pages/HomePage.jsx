import React from "react";
import FormCreateCustomer from "../components/FormCreateCustomer";
import UserKit from "../data/UserKit";

export default function HomePage() {
  const userKit = new UserKit();

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <h2>Home</h2>
      <FormCreateCustomer></FormCreateCustomer>
      <button onClick={getCustomerList}>Get customer list</button>
    </div>
  );
}
