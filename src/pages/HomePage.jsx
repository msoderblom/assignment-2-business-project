import React, { useContext, useEffect } from "react";
import CustomerList from "../components/CustomerList";
import FormCreateCustomer from "../components/FormCreateCustomer";
import { UserContext } from "../contexts/UserContext";
import UserKit from "../data/UserKit";

export default function HomePage() {
  const userKit = new UserKit();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    userKit
      .getUser()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });

    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h2>Home</h2>

      <h4>Welcome {user && user.firstName}!</h4>
      <CustomerList />

      <FormCreateCustomer></FormCreateCustomer>
    </div>
  );
}
