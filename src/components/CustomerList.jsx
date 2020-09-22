import React, { useContext, useEffect } from "react";
import UserKit from "../data/UserKit";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { Link } from "react-router-dom";

export default function CustomerList() {
  const userKit = new UserKit();
  const { customerList, setCustomerList } = useContext(CustomerListContext);

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
        console.log(data.results);
      });
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
            return (
              <li key={id}>
                <Link to={`customer/${id}`}>{name}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
