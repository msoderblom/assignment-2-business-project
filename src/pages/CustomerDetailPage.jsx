import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CustomerDetails from "../components/CustomerDetails";
import ButtonStyled from "../components/ButtonStyled";
import UserKit from "../data/UserKit";
import { EditCustomerContext } from "../contexts/EditCustomerContext";

export default function CustomerDetailPage(props) {
  const userKit = new UserKit();
  const [customerObj, setCustomerObj] = useState(null);
  const customerId = props.match.params.id;
  const history = useHistory();

  const [edit, setEdit] = useState({
    name: false,
    organisationNr: false,
    vatNr: false,
    reference: false,
    paymentTerm: false,
    website: false,
    email: false,
    phoneNumber: false,
  });

  function getCustomer() {
    console.log(customerId);
    userKit
      .getCustomerDetails(customerId)
      .then((res) => res.json())
      .then((data) => {
        setCustomerObj(data);
        console.log(data);
      });
  }
  function deleteCustomer() {
    console.log(customerId);
    userKit.deleteCustomerDetails(customerId).then(() => history.push("/home"));
  }

  useEffect(() => {
    getCustomer();

    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <EditCustomerContext.Provider value={{ edit, setEdit }}>
        Customer Details
        <ButtonStyled onClickFunc={deleteCustomer} title="Delete Customer" />
        {customerObj && <CustomerDetails customer={customerObj} />}
      </EditCustomerContext.Provider>
    </div>
  );
}
