import React from "react";
import { Link } from "react-router-dom";
import ButtonStyled from "../components/ButtonStyled";

export default function StartPage() {
  return (
    <div>
      <h1>Business Project</h1>
      <Link to="/register">
        <ButtonStyled title="Create a new account" />
      </Link>
      <Link to="/login">
        <ButtonStyled title="Login" />
      </Link>
    </div>
  );
}
