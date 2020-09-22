import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function StartPage() {
  return (
    <div>
      <h1>Business Project</h1>
      <Link to="/register">
        <Button title="Create a new account" />
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}
