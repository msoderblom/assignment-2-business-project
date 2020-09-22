import React from "react";
import { Link } from "react-router-dom";

export default function StartPage() {
  return (
    <div>
      <h1>Business Project</h1>
      <Link to="/register">
        <button>Create a new account</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}
