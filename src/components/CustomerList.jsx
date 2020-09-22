import React, { useEffect, useState } from "react";
import UserKit from "../data/UserKit";

export default function CustomerList() {
  const userKit = new UserKit();
  const [customerList, setCustomerList] = useState(null);
  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => setCustomerList(data.results));
  }

  useEffect(() => {
    getCustomerList();

    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h2>Your Customers</h2>
      <ul>
        {customerList &&
          customerList.map((customer) => {
            const id = customer.id;
            const name = customer.name;
            return <li key={id}>{name}</li>;
          })}
      </ul>
    </div>
  );
}
