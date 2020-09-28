import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import CustomerList from "../components/CustomerList";
import FormCreateCustomer from "../components/FormCreateCustomer";
import { UserContext } from "../contexts/UserContext";
import UserKit from "../data/UserKit";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 767px) {
    flex-direction: row;
  }

  & > * {
    flex: 1;
  }
`;

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
      <Wrapper>
        <CustomerList />

        <FormCreateCustomer />
      </Wrapper>
    </div>
  );
}
