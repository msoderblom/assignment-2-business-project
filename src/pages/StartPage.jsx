import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonStyled from "../components/ButtonStyled";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;
const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 1em;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    & > * {
      flex: 0.5;
    }
  }
`;

export default function StartPage() {
  return (
    <PageWrapper>
      <Container>
        <h2>Welcome to Business Management</h2>

        <Link to="/register">
          <ButtonStyled title="Create a new account" />
        </Link>

        <Link to="/login">
          <ButtonStyled title="Login" />
        </Link>
      </Container>
    </PageWrapper>
  );
}
