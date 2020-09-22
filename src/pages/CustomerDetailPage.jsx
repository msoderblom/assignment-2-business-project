import React, { useEffect, useState } from "react";
import UserKit from "../data/UserKit";

export default function CustomerDetailPage(props) {
  const userKit = new UserKit();
  const [customerObj, setCustomerObj] = useState(null);

  function getCustomer() {
    const customerId = props.match.params.id;
    console.log(customerId);
    userKit
      .getCustomerDetails(customerId)
      .then((res) => res.json())
      .then((data) => {
        setCustomerObj(data);
        console.log(data);
      });
  }

  useEffect(() => {
    getCustomer();

    // eslint-disable-next-line
  }, []);
  return (
    <div>
      Customer Details
      {customerObj && (
        <div>
          <p>{customerObj.id}</p>
          <p>{customerObj.name}</p>
          <p>{customerObj.name}</p>
        </div>
      )}
    </div>
  );
}
